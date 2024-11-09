// if there is any infringement, please contact delete!: github.com/kskshaf/kskshaf.github.io
const koikakeru = new APlayer({
    container: document.getElementById('ms-koi-kakeru'),
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
    {   // DISC 1
        name: "恋×シンアイ彼女 メインテーマ",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "記憶×ハジマリ",
        artist: 'Duca',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/02.lrc',
        theme: '#FFC7D3'
    }, { 
        name: "風の止まり木",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "名付けられた月曜日",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "半目野良猫",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "はしゃぎきれない少年",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/06.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "ENJOYが反射してる",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/07.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "さりげなくホップステップ",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/08.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "風の迷い路",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/09.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "手をつないだら。",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/10.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "flower",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/11.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "はとけかけの小豆アイス",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/12.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "ここにいるよ？",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/13.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, {//DISC2
        name: "東の空から始まる世界",
        artist: 'yuiko',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/01.lrc',
        theme: '#FFC7D3'
    }, { 
        name: "壇上のBlue eyes",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "小雨降る日の優しさ",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "虹かかる空の恋しさ",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "君は無音の中で",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "We are alone",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/06.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "忘れられたものたちへ",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/07.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "alpha：",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/08.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "僕らが友達だった時代",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/09.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "恋をしたら。",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/10.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "After the rain",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/11.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }, { 
        name: "GLORIOUS DAYS",
        artist: 'yuiko',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/12.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/12.lrc',
        theme: '#FFC7D3'
    }, { 
        name: "flower -piano arrangement-",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d2/13.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    }
    ]
});
