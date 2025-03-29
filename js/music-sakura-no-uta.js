// if there is any infringement, please contact delete!: github.com/kskshaf/kskshaf.github.io
const sakurunouta = new APlayer({
    container: document.getElementById('ms-sakura-no-uta'),
    fixed: false,
    autoplay: false,
    loop: 'all',
    order: 'list',
    preload: 'metadata',
    volume: 0.7,
    mutex: true,
    lrcType: 3,
    listFolded: false,
    audio: [
    {   // Vocal
        name: "櫻ノ詩",
        artist: 'はな',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/01.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/sakura-no-uta/01.lrc',
        theme: '#FFBF58'
    }, {
        name: "Bright pain",
        artist: '橋本みゆき',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/02.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/sakura-no-uta/02.lrc',
        theme: '#FFBF58'
    }, {
        name: "Pica pica",
        artist: 'monet',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/03.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/sakura-no-uta/03.lrc',
        theme: '#FFBF58'
    }, {
        name: "ZYPRESSENの花束",
        artist: 'monet',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/04.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/sakura-no-uta/04.lrc',
        theme: '#FFBF58'
    }, {
        name: "天球の下の奇蹟",
        artist: 'はな',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/05.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/sakura-no-uta/05.lrc',
        theme: '#FFBF58'
    }, {
        name: "DearMyFriend",
        artist: 'はな',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/06.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/sakura-no-uta/06.lrc',
        theme: '#FFBF58'
    }, {
        name: "在りし日のために",
        artist: 'monet',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/07.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/sakura-no-uta/07.lrc',
        theme: '#FFBF58'
    }, {
        name: "櫻ノ詩 - Piano Vocal ver",
        artist: 'はな',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/08.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/sakura-no-uta/01.lrc',
        theme: '#FFBF58'
    }, {
        name: "櫻ノ詩 - inst ver",
        artist: '松本文紀',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/09.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        theme: '#FFBF58'
    }, {
        name: "Pica pica - inst ver",
        artist: 'ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/10.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        theme: '#FFBF58'
    }, {
        name: "ZYPRESSENの花束 - inst ver",
        artist: 'ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/11.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        theme: '#FFBF58'
    }, {
        name: "天球の下の奇蹟 - inst ver",
        artist: '松本文紀',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/12.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        theme: '#FFBF58'
    }, {
        name: "DearMyFriend - inst ver",
        artist: '松本文紀',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/13.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        theme: '#FFBF58'
    }, {
        name: "在りし日のために - inst ver",
        artist: 'ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/14.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        theme: '#FFBF58'
    }, {
        name: "櫻ノ詩 - Piano inst ver",
        artist: '松本文紀',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-vc/15.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-vc/cover.jpg',
        theme: '#FFBF58'
    },  // Soundtrack
    {   // DISC1
        name: "美しい音色で世界が鳴った",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/01.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "見上げた青の果て",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/02.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "櫻ノ詩 (op short ver)",
        artist: 'はな',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/03.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/sakura-no-uta/s-03.lrc',
        theme: '#C5C3E1'
    }, {
        name: "舞い上がる因果交流のひかり",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/04.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "絵画は歌う",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/05.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "瞬間を閉じ込めた永遠",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/06.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "螺旋に伸びる色彩",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/07.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "音符は歩き出す",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/08.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "バカはバカのごとく現れる",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/09.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "陽射し入る窓",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/10.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "夜の流れはゆっくりと",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/11.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "昼間の絵画達",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/12.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "紳士ゲェム",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/13.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "君の筆は世界を奏でる",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/14.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "遊ぶ絵画",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/15.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "数秒交差",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/16.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "透明な嘘の花",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/17.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "色彩力無限",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/18.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "君が立つ大地だ",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/19.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "ざくざくと散る錆びた夢",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/20.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "花弁となり 世界は大いに歌う",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/21.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "Zypressenは櫻に変わる",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d1/22.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {   // DISC2
        name: "この櫻ノ詩の下",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/01.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "透明な白い日常",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/02.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "呼吸のように筆は踊る",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/03.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "心模型",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/04.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "花弁となり桜は大いに歌う",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/05.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "因果的交流の世界",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/06.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "舞い上がる因果交流",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/07.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "夢の歩みを見上げて",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/08.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "優雅な音階",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/09.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "-模型",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/10.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "月の眼球譚",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/11.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "心象の中の光",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/12.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "在りし日のために -inst ver",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/13.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "空を舞う月　空を舞う翼",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/14.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "ジムノペディ",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/15.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "軽やかに!軽やかに!",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/16.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "夜空は奏でるだろう",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/17.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "真っ赤な真実",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/18.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "天球の奇蹟",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/19.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "シューマン交響曲第一番的日常",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/20.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "ありがとう在りし日",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/21.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {
        name: "風の筆射す春日花抄",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/sakura-no-uta-pkgms-st/d2/22.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }
    ]
});
