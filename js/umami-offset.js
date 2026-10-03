/*!
 * umami-offset.js —— 前端“注水”
 * 2026.10.04 切换为 Umami 统计，busuanzi 统计数据丢失，故注水
 *
 * 原理：拦截主题向 Umami 发起的站点统计请求（/api/websites/.../stats），
 *      在真实数据上叠加固定偏移后再交给主题渲染。
 *      显示值 = Umami 实际值 + 偏移值，会随真实访问继续增长。
 * 以后想调整基准，只需修改下面两个偏移常量。
 * by deepseek
 */
(function () {
  'use strict'

  // 防止重复注入
  if (window.__umamiOffsetInstalled) return
  window.__umamiOffsetInstalled = true

  // ===== 注水参数 =====
  var UV_OFFSET = 8123
  var PV_OFFSET = 11020

  var UMAMI_HOST = 'umami-blog.haf208.cc'

  var nativeFetch = window.fetch
  if (!nativeFetch) return

  window.fetch = function (input, init) {
    var url = ''
    if (typeof input === 'string') {
      url = input
    } else if (input && typeof input.url === 'string') {
      url = input.url
    }

    // 只处理站点级 stats 请求；带 url= 参数的是文章级 page_pv 请求，保持真实值
    var shouldOffset =
      url.indexOf(UMAMI_HOST) !== -1 &&
      url.indexOf('/api/websites/') !== -1 &&
      url.indexOf('/stats') !== -1 &&
      url.indexOf('url=') === -1

    var promise = nativeFetch.call(this, input, init)

    if (!shouldOffset) return promise

    return promise.then(function (res) {
      if (!res || !res.ok) return res

      return res
        .json()
        .catch(function () {
          return {}
        })
        .then(function (data) {
          function bump (key, offset) {
            var v = data[key]
            if (typeof v === 'number') {
              data[key] = v + offset
            } else if (v && typeof v.value === 'number') {
              v.value += offset
            }
          }

          bump('visitors', UV_OFFSET)
          bump('pageviews', PV_OFFSET)

          return new Response(JSON.stringify(data), {
            status: res.status,
            statusText: res.statusText,
            headers: { 'Content-Type': 'application/json' }
          })
        })
    })
  }
})()
