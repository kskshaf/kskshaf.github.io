/*!
 * 通用 APlayer 初始化器（数据驱动）
 *
 * 用法：在页面里放一个带 class="js-aplayer" 的容器：
 *   <div class="js-aplayer" data-playlist="/js/playlists/xxx.json"
 *        data-fixed="true" data-order="random" data-group="Saga,bang_dream"></div>
 *
 * 歌单 JSON 为数组：[{ name, artist, url, cover?, lrc?, theme?, group? }, ...]
 * group 用于把多个歌单合并在同一个 JSON 里；容器加 data-group（逗号分隔）后
 * 只取对应分组的歌曲，不指定则取全部。url/cover/lrc 存的是相对路径，前缀由
 * 下方 MEDIA_BASE 统一提供，本地调试（127.0.0.1）与生产（公网）自动切换。
 *
 * 自动处理 pjax：
 *   - pjax:send  -> 销毁所有非固定播放器（保留右下角全局固定播放器）
 *   - pjax:complete -> 重新初始化页面内的播放器
 * 该脚本由 inject.bottom 注入、位于 pjax 交换区之外，事件监听注册一次永久生效。
 */
(() => {
  const registry = (window.aplayers = window.aplayers || [])

  // ---- 资源前缀配置（歌单 JSON 里只存相对路径） ----
  // debug: 本地 127.0.0.1:8878 媒体镜像；publ: 公网 OSS / 图床
  const MEDIA_BASE = {
    debug: {
      url: 'http://127.0.0.1:8878/media',
      cover: 'http://127.0.0.1:8878/pic-lrc-bed_lf/music',
      lrc: 'http://127.0.0.1:8878/pic-lrc-bed_lf/music'
    },
    publ: {
      url: 'https://music-sv-blog.haf208.cc',
      cover: 'https://pic-lrc-bed.haf208.cc/music',
      lrc: 'https://pic-lrc-bed.haf208.cc/music'
    }
  }
  // 在本机(localhost/127.0.0.1)访问时用 debug 前缀，否则用生产前缀
  const isLocalDebug =
    location.hostname === 'localhost' || location.hostname === '127.0.0.1'
  const BASE = MEDIA_BASE[isLocalDebug ? 'debug' : 'publ']

  // 相对路径 -> 拼接 base；绝对地址（外链）原样使用；空值保持空
  const resolve = (base, val) => {
    if (!val) return ''
    if (/^https?:\/\//.test(val)) return val
    return base + '/' + String(val).replace(/^\/+/, '')
  }

  const getAttr = (el, name, def) => {
    const v = el.getAttribute(name)
    return v === null ? def : v
  }

  const buildAudio = (list) =>
    list.map((s) => ({
      name: s.name,
      artist: s.artist,
      url: resolve(BASE.url, s.url),
      cover: resolve(BASE.cover, s.cover),
      lrc: resolve(BASE.lrc, s.lrc),
      theme: s.theme || '#49b1f5'
    }))

  // 按 data-group 过滤歌单：支持逗号分隔多个 group（如 "Saga,bang_dream"）。
  // 未指定 data-group 时返回全部歌曲；没有 group 字段的歌曲不会被匹配。
  const filterByGroup = (list, groupAttr) => {
    if (!groupAttr) return list
    const groups = groupAttr
      .split(',')
      .map((g) => g.trim())
      .filter(Boolean)
    if (!groups.length) return list
    return list.filter((s) => s.group && groups.includes(s.group))
  }

  // 修复：APlayer 初始化时若容器处于隐藏状态（butterfly 的 tabs / hideToggle
  // 会用 display:none 隐藏非激活面板），offsetWidth 为 0，会被误判为窄播放器
  // 并加上 aplayer-arrow 类，导致 order/loop 按钮被隐藏（该 class 只在初始化时
  // 判定一次）。这里监听容器尺寸，等它真正显示且宽度 >300px 时移除该 class。
  const fixArrowOnVisible = (el) => {
    if (!el.classList.contains('aplayer-arrow')) return
    if (typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(() => {
      if (el.offsetWidth > 300) {
        el.classList.remove('aplayer-arrow')
        ro.disconnect()
      }
    })
    ro.observe(el)
  }

  const initPlayer = (el) => {
    const url = getAttr(el, 'data-playlist', '')
    if (!url || el.dataset.loading) return
    el.dataset.loading = '1'
    fetch(url)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(new Error(res.status + ' ' + url))
      )
      .then((list) => {
        if (!Array.isArray(list) || list.length === 0) return
        // 若指定了 data-group，只取该 group 的歌曲
        const group = getAttr(el, 'data-group', '')
        const songs = group ? filterByGroup(list, group) : list
        if (songs.length === 0) {
          console.warn('[aplayer-init] 指定 group 没有匹配的歌曲:', group, url)
          return
        }
        const ap = new APlayer({
          container: el,
          fixed: getAttr(el, 'data-fixed', 'false') === 'true',
          autoplay: false,
          loop: 'all',
          order: getAttr(el, 'data-order', 'list'),
          preload: 'metadata',
          volume: 0.7,
          mutex: true,
          lrcType: 3,
          listFolded: false,
          audio: buildAudio(songs)
        })
        registry.push(ap)
        // 只修复页面播放器（可能因 tabs/hideToggle 隐藏而被误判为窄模式）；
        // fixed 全局播放器始终可见，不需要也不应干预
        if (!ap.options.fixed) fixArrowOnVisible(el)
      })
      .catch((err) => {
        // 失败时允许下次重试
        delete el.dataset.loading
        console.debug('[aplayer-init] 加载歌单失败:', err)
      })
  }

  // 判断元素当前是否真正渲染（display:none 或祖先隐藏时 getClientRects 为空）
  const isVisible = (el) => el.getClientRects().length > 0

  // 等待可见的延迟初始化观察器，离开页面时统一断开
  const pendingWatchers = new Set()

  const initAll = () => {
    document.querySelectorAll('.js-aplayer').forEach((el) => {
      // APlayer 会把 aplayer 系列 class 加到容器自身，而非子元素；
      // 因此用 classList 判断是否已初始化，避免 pjax 重复初始化
      if (el.classList.contains('aplayer') || el.dataset.loading) return

      if (isVisible(el)) {
        // 可见（激活 tab / 全局固定播放器）→ 立即初始化
        initPlayer(el)
        return
      }

      // 隐藏（非激活 tab / 折叠的 hideToggle）→ 延迟到可见时再初始化，
      // 避免页面一打开就为所有歌单拉取第一首的 metadata
      if (el.dataset.waitingVisible) return
      el.dataset.waitingVisible = '1'
      const ro = new ResizeObserver(() => {
        if (isVisible(el)) {
          ro.disconnect()
          pendingWatchers.delete(ro)
          delete el.dataset.waitingVisible
          initPlayer(el)
        }
      })
      pendingWatchers.add(ro)
      ro.observe(el)
    })
  }

  // 首次加载
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll)
  } else {
    initAll()
  }

  // pjax：切换前销毁非固定播放器，切换完成后重新初始化
  document.addEventListener('pjax:send', () => {
    // 断开所有等待可见的延迟初始化观察器（旧 DOM 即将被替换）
    pendingWatchers.forEach((ro) => ro.disconnect())
    pendingWatchers.clear()

    registry.forEach((p) => {
      try {
        if (!p.options.fixed) {
          // APlayer 已知问题：若音频触发过 error，其内部已排定 "2 秒后自动跳下一首"
          // 的定时器；销毁会清空列表，定时器随后触发 list.switch 访问空列表而抛
          // TypeError。先清空歌单让 switch 提前返回、error 处理器不再排定新定时器。
          if (p.list) p.list.audios = []
          p.destroy()
        }
      } catch (e) { /* ignore */ }
    })
    registry.length = 0
  })
  document.addEventListener('pjax:complete', initAll)
})()
