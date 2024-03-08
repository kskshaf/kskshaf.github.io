// if there is any infringement, please contact delete!: github.com/kskshaf/kskshaf.github.io
const apall = new APlayer({
    container: document.getElementById('aplayerallpages'),
    fixed: true,
    autoplay: false,
    loop: 'all',
    order: 'list',
    preload: 'metadata',
    volume: 0.7,
    mutex: true,
    lrcType: 3,
    listFolded: false,
    audio: [
    // wonderful everyday
    {
        name: "空気力学少女と少年の詩 -Piano Ver.-",
        artist: 'szak',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/wonderful_everyday/disc2-17.m4a',
        theme: '#9F604C'
    }, {
        name: "夜の向日葵",
        artist: 'szak',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/wonderful_everyday/disc1-2.m4a',
        theme: '#9F604C'
    }, {
        name: "変わらないからこそ",
        artist: 'szak',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/wonderful_everyday/disc1-3.m4a',
        theme: '#9F604C'
    }, {
        name: "音に出来る事",
        artist: 'H.B STUDIO',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/wonderful_everyday/disc1-1.m4a',
        theme: '#9F604C'
    }, {
        name: "夏の大三角",
        artist: 'ryo',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/wonderful_everyday/disc1-20.m4a',
        theme: '#9F604C'
    }, {
        name: "同じ空はどこにも無い",
        artist: "H.B STUDIO",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/wonderful_everyday/disc2-12.m4a',
        theme: '#9F604C'
    }, {
        name: "窓と光",
        artist: 'szak',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/wonderful_everyday/disc2-13.m4a',
        theme: '#9F604C'
    },
    // Others
    {
        name: "銀の龍の背に乗って",
        artist: '中岛みゆき',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/01.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/01.jpg',
        theme: '#C69480'
    }, {
        name: "雪の華",
        artist: '中島美嘉',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/02.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/02.jpg',
        theme: '#484632'
    }, {
        name: "雪の華",
        artist: '南條愛乃',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/03.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/umca-10015.jpg',
        theme: '#AEA191'
    }, {
        name: "銀の龍の背に乗って",
        artist: '佐藤聡美',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/04.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/umca-10015.jpg',
        theme: '#AEA191'
    }, {
        name: "空も飛べるはず",
        artist: 'Twinkle Voice All Stars',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/05.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/umca-10015.jpg',
        theme: '#AEA191'
    }, {
        name: "キスのひとつで",
        artist: '佐咲紗花',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/08.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/08.jpg',
        lrc: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/08.lrc',
        theme: '#AEA191'
    },
    // fhána
    {
        name: "星屑のインターリュード",
        artist: 'fhána',
        url: 'https://music-for-blog.haf208.cc/fhána/LACM-14279/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/fhána/LACM-14279/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/fhána/LACM-14279/01.lrc',
        theme: '#9279B7'
    },
    // fripSide
    {
        name: "only my railgun",
        artist: 'fripSide',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/30.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/cover.jpg',
        theme: '#972C3F'
    }, {
        name: "LEVEL5-judgelight-",
        artist: 'fripSide',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/29.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/cover.jpg',
        theme: '#972C3F'
    }, {
        name: "future gazer",
        artist: 'fripSide',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/28.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/cover.jpg',
        theme: '#972C3F'
    }, {
        name: "Heaven is a Place On Earth",
        artist: 'fripSide',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/27.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/cover.jpg',
        theme: '#972C3F'
    }, {
        name: "sister's noise",
        artist: 'fripSide',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/23.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/cover.jpg',
        theme: '#972C3F'
    }, {
        name: "eternal reality",
        artist: 'fripSide',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/22.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/cover.jpg',
        theme: '#972C3F'
    }, {
        name: "final phase",
        artist: 'fripSide',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/03.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/cover.jpg',
        theme: '#972C3F'
    }, {
        name: "dual existence",
        artist: 'fripSide',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/01.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/cover.jpg',
        theme: '#972C3F'
    }, {
        name: "We Rise",
        artist: 'fripSide',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/02.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/cover.jpg',
        theme: '#972C3F'
    }, {
        name: "Hesitation Snow",
        artist: 'fripSide',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/25.m4a',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.0/fripSide/GNCA-1582/25.lrc',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-04/1.0.0/files/fripSide/GNCA-1582/cover.jpg',
        theme: '#972C3F'
    },
    // Darling in the FranXX
    {
        name: "トリカゴ",
        artist: 'XX:me',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/07.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/07.jpg',
        theme: '#46718B'
    },
    // Re:0
    {
        name: "Redo",
        artist: '鈴木このみ',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/06.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/others/06.webp',
        theme: '#C9AFF8'
    },
    // About Anime Madoka
    {
        name: "Postmeridie",
        artist: '梶浦由纪',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-9124/08.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Scaena felix",
        artist: '梶浦由纪',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-9124/12.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Venari strigas",
        artist: '梶浦由纪',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-9128/03.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Ave Maria",
        artist: '梶浦由纪',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-9128/12.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Numquam vincar",
        artist: '梶浦由纪',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-9132/01.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Surgam identidem",
        artist: '梶浦由纪',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-9132/04.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Sagitta luminis",
        artist: '梶浦由纪',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-9132/06.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Pergo pugnare",
        artist: '梶浦由纪',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-9132/12.m4a',
        theme: '#FFC0D3'
    }, {
        name: "her wings",
        artist: '梶浦由纪',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-3133/35.m4a',
        theme: '#FFC0D3'
    }, {
        name: "for the next episode",
        artist: '梶浦由纪',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-3133/37.m4a',
        theme: '#FFC0D3'
    }, {
        name: "コネクト",
        artist: 'ClariS',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/SECL-946/01.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/SECL-946/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "また あした",
        artist: '鹿目まどか (悠木碧)',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/SVWC-7980/23.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/SVWC-7980/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "ルミナス",
        artist: 'ClariS',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/SECL-1196/01.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/SECL-1196/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "Friends",
        artist: 'ClariS',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/SECL-1196/02.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/SECL-1196/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "we're here for you",
        artist: '梶浦由記',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-3533/37.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-3533/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "take your hands",
        artist: '梶浦由記',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-3533/38.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-3533/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "wings of relief",
        artist: '梶浦由記',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-3533/39.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-3533/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "I was waiting for this moment",
        artist: '梶浦由記',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-3533/40.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-3533/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "her new wings",
        artist: '梶浦由記',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-3533/41.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/ANZX-3533/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "カラフル -movie MIX-",
        artist: 'ClariS',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/SECL-1416/04.m4a',
        theme: '#FFC0D3'
    }, {
        name: "君の銀の庭",
        artist: 'Kalafina',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/SECL-1422/01.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-03/1.0.0/files/madoka/SECL-1422/cover.jpg',
        theme: '#0066CC'
    },
    // ATRI
    {
        name: "海中都市",
        artist: '松本文紀',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/atri/01.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/atri/cover.jpg',
        theme: '#7CD5F8'
    }, {
        name: "暖かな時間",
        artist: '松本文紀',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/atri/03.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/atri/cover.jpg',
        theme: '#7CD5F8'
    }, {
        name: "親愛なるあの日々へ",
        artist: '松本文紀',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/atri/20.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/atri/cover.jpg',
        theme: '#7CD5F8'
    }, {
        name: "光放て!",
        artist: '柳麻美',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/atri/21.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/atri/cover.jpg',
        theme: '#7CD5F8'
    }, {
        name: "Dear Moments",
        artist: '赤尾ひかる',
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/atri/24.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/atri/cover.jpg',
        theme: '#7CD5F8'
    },
    // LoveLive
    {
        name: "始まりの朝(メインテーマ)",
        artist: '藤澤慶昌',
        url: 'https://music-for-blog.haf208.cc/lovelive/us/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/01.jpg',
        theme: '#FFAE2E'
    }, {
        name: "Snow halation",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/02.jpg',
        theme: '#E1E1E1'
    }, {
        name: "ススメ→トゥモロウ",
        artist: "高坂穂乃果...",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/03.jpg',
        theme: '#FFAE2E'
    }, {
        name: "START：DASH！！",
        artist: "高坂穂乃果...",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/03.jpg',
        theme: '#7AEBF9'
    }, {
        name: "僕らは今のなかで",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/05.jpg',
        theme: '#FFAE2E'
    }, {
        name: "きっと青春が聞こえる",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/07.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/07.jpg',
        theme: '#FFAE2E'
    }, {
        name: "それは僕たちの奇跡",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/08.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/08.jpg',
        theme: '#FFAE2E'
    }, {
        name: "ユメノトビラ",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/09.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/09.jpg',
        theme: '#8DF9F6'
    }, {
        name: "Dancing stars on me！",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/06.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/06.jpg',
        theme: '#FFAE2E'
    }, {
        name: "Love wing bell",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/10.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/06.jpg',
        theme: '#FFADC0'
    }, {
        name: "KiRa-KiRa Sensation！",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/11.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/11.jpg',
        theme: '#FFADC0'
    }, {
        name: "どんなときもずっと",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/12.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/12.jpg',
        theme: '#FFB800'
    }, {
        name: "ステージへと続く道",
        artist: '藤澤慶昌',
        url: 'https://music-for-blog.haf208.cc/lovelive/us/19.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/19.jpg',
        theme: '#FFAE2E'
    }, {
        name: "SUNNY DAY SONG",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/16.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/16.jpg',
        theme: '#FF9B00'
    }, {
        name: "僕たちはひとつの光",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/17.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/17.jpg',
        theme: '#F2C7D3'
    }, {
        name: "冬がくれた予感",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/13.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/13.jpg',
        theme: '#DAFFF9'
    }, {
        name: "LOVELESS WORLD",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/14.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/14.jpg',
        theme: '#DAFFF9'
    }, {
        name: "MOMENT RING",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/18.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/15.jpg',
        theme: '#FFB800'
    }, {
        name: "さようならへさよなら！",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lovelive/us/15.m4a',
        cover: 'https://music-for-blog.haf208.cc/lovelive/us/15.jpg',
        theme: '#FFB800'
    }, {
        name: "青空Jumping Heart",
        artist: "Apours",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/lovelive/aqours/01.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/lovelive/aqours/01.jpg',
        theme: '#4DCAFF'
    }, {
        name: "虹色Passions!",
        artist: "虹ヶ咲学園スクールアイドル同好会",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/lovelive/nijigasaki/01.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/lovelive/nijigasaki/01.jpg',
        theme: '#D7D7D7'
    }, {
        name: "Colorful Dreams! Colorful Smiles!",
        artist: "虹ヶ咲学園...",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/lovelive/nijigasaki/02.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/lovelive/nijigasaki/02.jpg',
        theme: '#D7D7D7'
    }, {
        name: "START!! True dreams",
        artist: "Liella!",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/lovelive/liella/01.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/lovelive/liella/01.jpg',
        theme: '#FF5757'
    }, {
        name: "LIVE with a smile!",
        artist: "Apours&ニジガク&Liella!",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/lovelive/01.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/lovelive/01.jpg',
        theme: '#EE6A82'
    },
    // 227
    {
        name: "曇り空の向こうは晴れている",
        artist: "22/7",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/227/SRCL-12642/12.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/227/SRCL-12642/cover.jpg',
        lrc: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/227/SRCL-12642/12.lrc',
        theme: '#A3A09E'
    }, {
        name: "僕は今夜、出て行く",
        artist: "22/7",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/227/SRCL-12642/09.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/227/SRCL-12642/cover.jpg',
        lrc: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/227/SRCL-12642/09.lrc',
        theme: '#A3A09E'
    }, {
        name: "世界の矛盾",
        artist: "22/7",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/227/SRCL-12642/11.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/227/SRCL-12642/cover.jpg',
        lrc: 'https://registry.npmmirror.com/lokocdnms-pkg-01/1.0.1/files/227/SRCL-12642/11.lrc',
        theme: '#A3A09E'
    },
    // MyGO!!!!!
    {
        name: "壱雫空",
        artist: "MyGO!!!!!",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/bangdream/mygo/BRMM-10716/02.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/bangdream/mygo/BRMM-10716/cover.jpg',
        theme: '#8DABC2'
    }, {
        name: "潜在表明",
        artist: "MyGO!!!!!",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/bangdream/mygo/BRMM-10716/06.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/bangdream/mygo/BRMM-10716/cover.jpg',
        theme: '#8DABC2'
    }, {
        name: "春日影",
        artist: "MyGO!!!!!",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/bangdream/mygo/BRMM-10716/08.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/bangdream/mygo/BRMM-10716/cover.jpg',
        theme: '#8DABC2'
    }, {
        name: "詩超絆",
        artist: "MyGO!!!!!",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/bangdream/mygo/BRMM-10716/09.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/bangdream/mygo/BRMM-10716/cover.jpg',
        theme: '#8DABC2'
    }, {
        name: "栞",
        artist: "MyGO!!!!!",
        url: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/bangdream/mygo/BRMM-10716/13.m4a',
        cover: 'https://registry.npmmirror.com/lokocdnms-pkg-02/1.0.0/files/bangdream/mygo/BRMM-10716/cover.jpg',
        theme: '#F8D9B6'
    }
    ]
});
