// if there is any infringement, please contact delete!: github.com/kskshaf/kskshaf.github.io
const chmusic = new APlayer({
    container: document.getElementById('music-chm'),
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
    {
        name: "绽放",
        artist: '戴娆',
        url: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/01.m4a',
        cover: 'https://image2.sina.com.cn/ent/y/d/2006-08-01/U996P28T3D1181799F329DT20060801172912.jpg',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.6/ch/01.lrc',
        theme: '#F695DE'
    }, {
        name: "你曾是少年",
        artist: 'S.H.E',
        url: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/02.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/02.webp',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.6/ch/02.lrc',
        theme: '#A4A4A4'
    }, {
        name: "最初的梦想",
        artist: '范玮琪',
        url: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/03.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/03.webp',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.6/ch/03.lrc',
        theme: '#FFCE7B'
    }, {
        name: "流星雨",
        artist: 'F4',
        url: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/04.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/04.webp',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.6/ch/04.lrc',
        theme: '#89D2FC'
    }, {
        name: "喜欢你",
        artist: 'G.E.M.邓紫棋',
        url: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/05.mp3',
        cover: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/05.jpg',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.6/ch/05.lrc',
        theme: '#A6D1E3'
    }, {
        name: "敢爱敢做",
        artist: '林子祥',
        url: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/06.m4a', //https://youtu.be/HGmTVMZR0hE
        cover: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/06.webp',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.6/ch/06.lrc',
        theme: '#EE8463'
    }, {
        name: "真的汉子",
        artist: '林子祥',
        url: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/07.m4a', //https://youtu.be/l4qCBKuS0Bc
        cover: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/07.webp',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.6/ch/07.lrc',
        theme: '#74BEFD'
    }, {
        name: "街头霸王榜",
        artist: '林子祥',
        url: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/08.m4a', //https://youtu.be/wE_bPQ29PFE
        cover: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/08.webp',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.6/ch/08.lrc',
        theme: '#74BEFD'
    }, {
        name: "十分十二寸",
        artist: '林子祥',
        url: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/09.m4a', //https://youtu.be/ua9R7rjo4LM
        cover: 'https://unpkg.com/lokocdnms-pkg-ch01@1.0.1/09.webp',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.6/ch/09.lrc',
        theme: '#74BEFD'
    }
    ]
});
