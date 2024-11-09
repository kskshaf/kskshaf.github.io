// if there is any infringement, please contact delete!: github.com/kskshaf/kskshaf.github.io
const apall = new APlayer({
    container: document.getElementById('aplayerallpages'),
    fixed: true,
    autoplay: false,
    loop: 'all',
    order: 'random',
    preload: 'metadata',
    volume: 0.7,
    mutex: true,
    lrcType: 3,
    listFolded: false,
    audio: [
    // sakura no uta
    { 
        name: "美しい音色で世界が鳴った",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://music-for-blog.haf208.cc/sakura-no-uta-pkgms-st/d1/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, { 
        name: "櫻ノ詩",
        artist: 'はな',
        url: 'https://music-for-blog.haf208.cc/sakura-no-uta-pkgms-vc/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/sakura-no-uta-pkgms-vc/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/sakura-no-uta/01.lrc',
        theme: '#FFBF58'
    }, {
        name: "ジムノペディ",
        artist: '松本文紀 & ピクセルビー',
        url: 'https://music-for-blog.haf208.cc/sakura-no-uta-pkgms-st/d2/15.m4a',
        cover: 'https://music-for-blog.haf208.cc/sakura-no-uta-pkgms-st/cover.jpg',
        theme: '#C5C3E1'
    }, {// New
        name: "ニュー・マイ・ノーマル",
        artist: 'Mrs. GREEN APPLE',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/others/11.m4a', //yt:E7YAf0O02Ms
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/others/11.lrc',
        theme: '#44DB56'
    }, {
        name: "freak of nature : start",
        artist: '彩菜',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/11.m4a',
        cover: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "雪は何色",
        artist: 'Kotoha',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/PALETTE2308/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/PALETTE2308/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/others/PALETTE2308/01.lrc',
        theme: '#C8FFFD'
    }, {
        name: "夢と色でできている",
        artist: '佐咲紗花',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/FENG-59/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/FENG-59/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/FENG-59/01.lrc',
        theme: '#A4DDFF'
    }, {
        name: "これくらいで",
        artist: '藍月なくる',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/FENG-59/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/FENG-59/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/FENG-59/02.lrc',
        theme: '#A4DDFF'
    }, {
        name: "夢と色でできている Grand End",
        artist: '佐咲紗花',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/FENG-59/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/FENG-59/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/FENG-59/03.lrc',
        theme: '#A4DDFF'
    }, {
        name: "优しい风が吹くあの场所で -Anime Version-",
        artist: '三輪学',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/KIXA-75-Vol1/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/KIXA-75-Vol1/cover.jpg',
        theme: '#DCD3DB'
    }, {
        name: "未来へ踏み出す一歩 -Anime Version-",
        artist: '三輪学',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/KIXA-75-Vol1/19.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/KIXA-75-Vol1/cover.jpg',
        theme: '#DCD3DB'
    }, {
        name: "优しい风が吹くあの场所で",
        artist: '三輪学',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/SPH-003/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/SPH-003/cover.jpg',
        theme: '#DCD3DB'
    }, {
        name: "未来へ踏み出す一歩-",
        artist: '三輪学',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/SPH-003/19.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-06/SPH-003/cover.jpg',
        theme: '#DCD3DB'
    }, {
        name: "花びらとりぼん",
        artist: 'Larval Stage Planning',
        url: 'https://music-for-blog.haf208.cc/majo-koi-nikki-st1/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/majo-koi-nikki-st1/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/majo-koi-nikki/01.lrc',
        theme: '#FAC8D8'
    }, {
        name: "送る言葉",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/17.m4a',
        cover: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "桜の心",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/18.m4a',
        cover: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "夢のなごりを探して",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/majo-koi-nikki-st1/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/majo-koi-nikki-st1/cover.jpg',
        theme: '#FAC8D8'
    }, {
        name: "どこかにありそうで、どこにもない",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/majo-koi-nikki-st2/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/majo-koi-nikki-st1/cover.jpg',
        theme: '#FAC8D8'
    }, {
        name: "砂漠の花",
        artist: '樋口秀樹',
        url: 'https://music-for-blog.haf208.cc/majo-koi-nikki-st2/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/majo-koi-nikki-st1/cover.jpg',
        theme: '#FAC8D8'
    },{
        name: "恋×シンアイ彼女 メインテーマ",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/d1/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/koi-kakeru/cover.webp',
        theme: '#FFC7D3'
    },  //YOASOBI
    {   //XSCL-50
        name: "Epilogue(XSCL-50)",
        artist: "YOASOBI",
        url: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/cover.webp',
        theme: '#FDB1B0'
    }, {
        name: "アンコール",
        artist: "YOASOBI",
        url: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/02.lrc',
        theme: '#FDB1B0'
    }, {
        name: "ハルジオン",
        artist: "YOASOBI",
        url: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/03.lrc',
        theme: '#FDB1B0'
    }, {
        name: "あの夢をなぞって",
        artist: "YOASOBI",
        url: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/04.lrc',
        theme: '#FDB1B0'
    }, {
        name: "たぶん",
        artist: "YOASOBI",
        url: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/05.lrc',
        theme: '#FDB1B0'
    }, {
        name: "群青",
        artist: "YOASOBI",
        url: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/06.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/06.lrc',
        theme: '#FDB1B0'
    }, {
        name: "ハルカ",
        artist: "YOASOBI",
        url: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/07.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/07.lrc',
        theme: '#FDB1B0'
    }, {
        name: "夜に駆ける",
        artist: "YOASOBI",
        url: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/08.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/08.lrc',
        theme: '#FDB1B0'
    }, {
        name: "Prologue(XSCL-50)",
        artist: "YOASOBI",
        url: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/09.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/XSCL-50/cover.webp',
        theme: '#FDB1B0'
    }, {//YOASOBI-089
        name: "UNDEAD",
        artist: "YOASOBI",
        url: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/YOASOBI-089/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/YOASOBI-089/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/YOASOBI/YOASOBI-089/01.lrc',
        theme: '#D82717'
    },  // Inori Minase
    {   // KICM-1783
        name: "アイマイモコ",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc//local-pkg/Inori_Minase/KICM-1783/01.m4a',
        cover: 'https://music-for-blog.haf208.cc//local-pkg/Inori_Minase/KICM-1783/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc//local-pkg/Inori_Minase/KICM-1783/01.lrc',
        theme: '#FF98BB'
    }, {
        name: "リトルシューゲイザー",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc//local-pkg/Inori_Minase/KICM-1783/02.m4a',
        cover: 'https://music-for-blog.haf208.cc//local-pkg/Inori_Minase/KICM-1783/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc//local-pkg/Inori_Minase/KICM-1783/02.lrc',
        theme: '#FF98BB'
    }, {
        name: "夏夢",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc//local-pkg/Inori_Minase/KICM-1783/03.m4a',
        cover: 'https://music-for-blog.haf208.cc//local-pkg/Inori_Minase/KICM-1783/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc//local-pkg/Inori_Minase/KICM-1783/03.lrc',
        theme: '#FF98BB'
    }, {// KICS-93785
        name: "Step Up!",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/01.lrc',
        theme: '#FF98BB'
    }, {
        name: "ココロはMerry-Go-Round",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/02.lrc',
        theme: '#FF98BB'
    }, {
        name: "Kitty Cat Adventure",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/03.lrc',
        theme: '#FF98BB'
    }, {
        name: "Wonder Caravan!",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/04.lrc',
        theme: '#FF98BB'
    }, {
        name: "今を僕らしく生きてくために",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/05.lrc',
        theme: '#FF98BB'
    }, {
        name: "約束のアステリズム",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/06.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/06.lrc',
        theme: '#FF98BB'
    }, {
        name: "Future Seeker",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/07.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/07.lrc',
        theme: '#FF98BB'
    }, {
        name: "brave climber",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/08.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/08.lrc',
        theme: '#FF98BB'
    }, {
        name: "TRUST IN ETERNITY",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/09.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/09.lrc',
        theme: '#FF98BB'
    }, {
        name: "水彩メモリー",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/10.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/10.lrc',
        theme: '#FF98BB'
    }, {
        name: "My Graffiti",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/11.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/11.lrc',
        theme: '#FF98BB'
    }, {
        name: "Catch the Rainbow!",
        artist: "水瀬いのり",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/12.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Inori_Minase/KICS-93785/12.lrc',
        theme: '#FF98BB'
    },
    // sakura no toki
    {
        name: "散策夜雲",
        artist: '枕',
        url: 'https://music-for-blog.haf208.cc/sakura-no-toki-pkgms-02/d1-p2/19.m4a',
        cover: 'https://music-for-blog.haf208.cc/sakura-no-toki-pkgms-01/st-d1-p1/cover.webp',
        theme: '#FFC5E2'
    }, {
        name: "風景はせはしく明滅し",
        artist: '枕',
        url: 'https://music-for-blog.haf208.cc/sakura-no-toki-pkgms-01/st-d1-p1/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/sakura-no-toki-pkgms-01/st-d1-p1/cover.webp',
        theme: '#FFC5E2'
    }, {
        name: "我々は弱いから此処に来た",
        artist: '枕',
        url: 'https://music-for-blog.haf208.cc/sakura-no-toki-pkgms-02/d2/12.m4a',
        cover: 'https://music-for-blog.haf208.cc/sakura-no-toki-pkgms-01/st-d1-p1/cover.webp',
        theme: '#FFC5E2'
    }, {
        name: "刻ト詩",
        artist: 'Luna',
        url: 'https://music-for-blog.haf208.cc/sakura-no-toki-pkgms-01/vc/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/sakura-no-toki-pkgms-01/vc/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/sakura-no-toki/01.lrc',
        theme: '#FFC5E2'
    }, {
        name: "刻ト詩 ピアノアレンジ inst.",
        artist: '枕',
        url: 'https://music-for-blog.haf208.cc/sakura-no-toki-pkgms-01/op-piano/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/sakura-no-toki-pkgms-01/op-piano/cover.webp',
        theme: '#FFC6CC'
    },
    // wonderful everyday
    {
        name: "空気力学少女と少年の詩 -Piano Ver.-",
        artist: 'szak',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/wonderful_everyday/disc2-17.m4a',
        theme: '#9F604C'
    }, {
        name: "夜の向日葵",
        artist: 'szak',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/wonderful_everyday/disc1-2.m4a',
        theme: '#9F604C'
    }, {
        name: "変わらないからこそ",
        artist: 'szak',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/wonderful_everyday/disc1-3.m4a',
        theme: '#9F604C'
    }, {
        name: "音に出来る事",
        artist: 'H.B STUDIO',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/wonderful_everyday/disc1-1.m4a',
        theme: '#9F604C'
    }, {
        name: "夏の大三角",
        artist: 'ryo',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/wonderful_everyday/disc1-20.m4a',
        theme: '#9F604C'
    }, {
        name: "同じ空はどこにも無い",
        artist: "H.B STUDIO",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/wonderful_everyday/disc2-12.m4a',
        theme: '#9F604C'
    }, {
        name: "窓と光",
        artist: 'szak',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/wonderful_everyday/disc2-13.m4a',
        theme: '#9F604C'
    },
    {   // ATRI OST
        name: "海中都市",
        artist: '松本文紀',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/atri/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/atri/cover.jpg',
        theme: '#7CD5F8'
    }, {
        name: "暖かな時間",
        artist: '松本文紀',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/atri/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/atri/cover.jpg',
        theme: '#7CD5F8'
    }, {
        name: "親愛なるあの日々へ",
        artist: '松本文紀',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/atri/20.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/atri/cover.jpg',
        theme: '#7CD5F8'
    },
    // 
    {
        name: "绽放",
        artist: '戴娆',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/01.m4a',
        cover: 'https://image2.sina.com.cn/ent/y/d/2006-08-01/U996P28T3D1181799F329DT20060801172912.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/ch/01.lrc',
        theme: '#F695DE'
    }, {
        name: "你曾是少年",
        artist: 'S.H.E',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/02.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/ch/02.lrc',
        theme: '#A4A4A4'
    }, {
        name: "最初的梦想",
        artist: '范玮琪',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/03.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/ch/03.lrc',
        theme: '#FFCE7B'
    }, {
        name: "流星雨",
        artist: 'F4',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/04.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/ch/04.lrc',
        theme: '#89D2FC'
    }, {
        name: "喜欢你",
        artist: 'G.E.M.邓紫棋',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/05.mp3',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/05.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/ch/05.lrc',
        theme: '#A6D1E3'
    }, {
        name: "敢爱敢做",
        artist: '林子祥',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/06.m4a', //https://youtu.be/HGmTVMZR0hE
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/06.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/ch/06.lrc',
        theme: '#EE8463'
    }, {
        name: "真的汉子",
        artist: '林子祥',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/07.m4a', //https://youtu.be/l4qCBKuS0Bc
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/07.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/ch/07.lrc',
        theme: '#74BEFD'
    }, {
        name: "街头霸王榜",
        artist: '林子祥',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/08.m4a', //https://youtu.be/wE_bPQ29PFE
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/08.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/ch/08.lrc',
        theme: '#74BEFD'
    }, {
        name: "十分十二寸",
        artist: '林子祥',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/09.m4a', //https://youtu.be/ua9R7rjo4LM
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-ch01/09.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/ch/09.lrc',
        theme: '#74BEFD'
    }, {
        name: "life",
        artist: '霜月はるか',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/shimotsukin/KDSD-20017/disc1/07.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/shimotsukin/KDSD-20017/disc1/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/shimotsukin/KDSD-20017/disc1/07.lrc',
        theme: '#67AE87'
    }, {
        name: "Kaleidoscope",
        artist: '霜月はるか',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/shimotsukin/KDSD-20017/disc2/10.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/shimotsukin/KDSD-20017/disc2/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/shimotsukin/KDSD-20017/disc2/10.lrc',
        theme: '#FFA5DE'
    }, {
        name: "distance",
        artist: "霜月はるか",
        url: 'https://music-for-blog.haf208.cc/local-pkg/shimotsukin/KDSD-00333/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/shimotsukin/KDSD-00333/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/shimotsukin/KDSD-00333/05.lrc',
        theme: '#9ACBFE'
    }, {
        name: "希望の空",
        artist: "霜月はるか",
        url: 'https://music-for-blog.haf208.cc/local-pkg/shimotsukin/KDSD-00623/09.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/shimotsukin/KDSD-00623/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/shimotsukin/KDSD-00623/09.lrc',
        theme: '#FEE58F'
    }, {
        name: "明日、晴れるかな",
        artist: '三澤紗千香',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/others/10.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/others/10.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/others/10.lrc',
        theme: '#E1BCBC'
    }, {
        name: "春日影",
        artist: "CRYCHIC",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/others/09.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/others/09.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/others/09.lrc',
        theme: '#8DABC2'
    }, {
        name: "アルカテイル",
        artist: '铃木このみ',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/summer_pockets/KSLM-0151/11.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/summer_pockets/KSLM-0151/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/summer_pockets/KSLM-0151/11.lrc',
        theme: '#E1BCBC'
    }, {
        name: "Star Trail",
        artist: "長谷川育美",
        url: 'https://music-for-blog.haf208.cc/local-pkg/FWS-00100CD/21.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/FWS-00100CD/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/FWS-00100CD/21.lrc',
        theme: '#49CDFE'
    }, {
        name: "さくら、Reincarnation",
        artist: '佐咲紗花',
        url: 'https://music-for-blog.haf208.cc/moyu-cdnms-pkg-01/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/sakura-moyu/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/sakura-moyu/disc1/01.lrc',
        theme: '#FE8FA7'
    }, {
        name: "終わらない物語",
        artist: '鈴湯',
        url: 'https://music-for-blog.haf208.cc/moyu-cdnms-pkg-01/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/sakura-moyu/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/sakura-moyu/disc1/02.lrc',
        theme: '#FE8FA7'
    }, {
        name: "さくら、もゆ。",
        artist: '夏和小',
        url: 'https://music-for-blog.haf208.cc/moyu-cdnms-pkg-01/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/sakura-moyu/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/sakura-moyu/disc1/03.lrc',
        theme: '#FE8FA7'
    }, {
        name: "輪廻",
        artist: '山本美禰子',
        url: 'https://music-for-blog.haf208.cc/moyu-cdnms-pkg-01/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/sakura-moyu/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/sakura-moyu/disc1/04.lrc',
        theme: '#FE8FA7'
    }, {
        name: "花あかりの時",
        artist: 'eufonius',
        url: 'https://music-for-blog.haf208.cc/moyu-cdnms-pkg-01/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/sakura-moyu/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/sakura-moyu/disc1/05.lrc',
        theme: '#FE8FA7'
    },  {
        name: "さくら、Reincarnation - Arrange",
        artist: '忍',
        url: 'https://music-for-blog.haf208.cc/moyu-cdnms-pkg-04/14.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {// Saga
        name: "徒花ネクロマンシー Album ver.",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/02.lrc',
        theme: '#A2A09D'
    }, {
        name: "目覚めRETURNER",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/04.lrc',
        theme: '#A2A09D'
    }, {
        name: "アツクナレ",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/06.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/06.lrc',
        theme: '#A2A09D'
    }, {
        name: "To my Dearest",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/08.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/08.lrc',
        theme: '#A2A09D'
    }, {
        name: "佐賀事変",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/09.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/09.lrc',
        theme: '#A2A09D'
    }, {
        name: "特攻DANCE ~DAWN OF THE BAD~",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/10.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/10.lrc',
        theme: '#A2A09D'
    }, {
        name: "ヨミガエレ",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/11.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/11.lrc',
        theme: '#A2A09D'
    }, {
        name: "FLAGをはためかせろ！",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/12.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/12.lrc',
        theme: '#A2A09D'
    }, {
        name: "輝いて",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/13.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/13.lrc',
        theme: '#A2A09D'
    }, {
        name: "光へ",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/14.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/14.lrc',
        theme: '#A2A09D'
    }, {
        name: "FANTASTIC LOVERS",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/15.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/15.lrc',
        theme: '#A2A09D'
    }, {
        name: "ゼリーフィッシュ",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/16.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/16.lrc',
        theme: '#A2A09D'
    }, {
        name: "サガ・アーケードラップ",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/17.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/17.lrc',
        theme: '#A2A09D'
    }, {
        name: "To my Dearest~Lily's practice singing~",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/18.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        theme: '#A2A09D'
    }, {
        name: "宣誓！ALIVE センセーション",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/19.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-12682/19.lrc',
        theme: '#A2A09D'
    }, {
        name: "REVENGE",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13353B/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13353B/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13353B/02.lrc',
        theme: '#D669D2'
    }, {
        name: "風の強い日は嫌いか? FranChouChou cover",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13353B/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13353B/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13353B/03.lrc',
        theme: '#D669D2'
    }, {
        name: "風の強い日は嫌いか?",
        artist: "ホワイト竜 (白竜)",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-13357/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-13357/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-13357/02.lrc',
        theme: '#3E3C2D'
    }, {
        name: "50と4つの忘れ物",
        artist: "紺野純子 (河瀬茉希)",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13353B/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13353B/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13353B/05.lrc',
        theme: '#D669D2'
    }, {
        name: "激昂サバイブ",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13353B/06.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13353B/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13353B/06.lrc',
        theme: '#D669D2'
    }, {
        name: "Never ending saga",
        artist: "山下洋介",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13355B/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13355B/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13355B/01.lrc',
        theme: '#EEB1D7'
    }, {
        name: "追い風トラベラーズ",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13355B/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13355B/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13355B/03.lrc',
        theme: '#EEB1D7'
    }, {
        name: "ChouChouture",
        artist: "加藤裕介",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13355B/10.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYXA-13355B/cover.webp',
        theme: '#EEB1D7'
    }, {
        name: "大河よ共に泣いてくれ",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-13356/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-13356/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-13356/01.lrc',
        theme: '#3E3C2D'
    }, {
        name: "夢を手に、戻れる場所もない日々を",
        artist: "FranChouChou",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-13357/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-13357/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Saga/EYCA-13357/01.lrc',
        theme: '#3E3C2D'
    }, {// Others
        name: "深愛",
        artist: "Say a Little Prayer",
        url: 'https://music-for-blog.haf208.cc/local-pkg/BFDA-00004/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/BFDA-00004/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/BFDA-00004/01.lrc',
        theme: '#999999'
    }, {
        name: "三人",
        artist: "Say a Little Prayer",
        url: 'https://music-for-blog.haf208.cc/local-pkg/BFDA-00004/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/BFDA-00004/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/BFDA-00004/02.lrc',
        theme: '#999999'
    }, {
        name: "深愛",
        artist: "水樹奈々",
        url: 'https://music-for-blog.haf208.cc/local-pkg/KICM-1270/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/KICM-1270/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/KICM-1270/01.lrc',
        theme: '#000000'
    }, {
        name: "残酷な天使のテーゼ",
        artist: "高橋洋子",
        url: 'https://music-for-blog.haf208.cc/local-pkg/KIDA-116/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/KIDA-116/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/KIDA-116/01.lrc',
        theme: '#442F19'
    }, {
        name: "ウッーウッーウマウマ(゜.゜) (Speedycake Remix)",
        artist: "キャラメル",
        url: 'https://music-for-blog.haf208.cc/local-pkg/QWCE-20001/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/QWCE-20001/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/QWCE-20001/01.lrc',
        theme: '#71FEE2'
    }, {
        name: "Re:TrymenT",
        artist: "紫咲ほたる",
        url: 'https://music-for-blog.haf208.cc/local-pkg/RASK-CD0002/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/RASK-CD0002/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/RASK-CD0002/01.lrc',
        theme: '#ADCB3C'
    }, {
        name: "Only for you",
        artist: "千本木彩花、石見舞菜香",
        url: 'https://music-for-blog.haf208.cc/local-pkg/ZMCZ-16342/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/ZMCZ-16342/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/ZMCZ-16342/01.lrc',
        theme: '#F9A3C5'
    }, {
        name: "Nevereverland",
        artist: "ナノ",
        url: 'https://music-for-blog.haf208.cc/local-pkg/VTCL-60519/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/VTCL-60519/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/VTCL-60519/02.lrc',
        theme: '#A1A1A1'
    }, {
        name: "Scarlet",
        artist: "榊原ゆい",
        url: 'https://music-for-blog.haf208.cc/local-pkg/YSCD-0024/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/YSCD-0024/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/YSCD-0024/01.lrc',
        theme: '#EEA3A9'
    }, {
        name: "君の知らない物語",
        artist: "supercell",
        url: 'https://music-for-blog.haf208.cc/local-pkg/SRCL-7081/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/SRCL-7081/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/SRCL-7081/01.lrc',
        theme: '#364B5B'
    }, {
        name: "地球最後の告白を",
        artist: "H△G",
        url: 'https://music-for-blog.haf208.cc/local-pkg/UICZ-4395/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/UICZ-4395/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/UICZ-4395/04.lrc',
        theme: '#266CB4'
    }, {
        name: "桜ノ雨",
        artist: "H△G",
        url: 'https://music-for-blog.haf208.cc/local-pkg/UICZ-4395/09.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/UICZ-4395/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/UICZ-4395/09.lrc',
        theme: '#266CB4'
    }, {
        name: "U&I",
        artist: "放課後ティータイム",
        url: 'https://music-for-blog.haf208.cc/local-pkg/PCSP-01969/18.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/PCSP-01969/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/PCSP-01969/18.lrc',
        theme: '#FEAA31'
    }, {
        name: "天使にふれたよ!",
        artist: "放課後ティータイム",
        url: 'https://music-for-blog.haf208.cc/local-pkg/PCSP-01969/19.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/PCSP-01969/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/PCSP-01969/19.lrc',
        theme: '#FEAA31'
    }, {
        name: "ホシトハナ",
        artist: "讃州中学勇者部",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/01.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/01.lrc',
        theme: '#FEB9D1'
    }, {
        name: "祈りの歌",
        artist: "黒沢ともよ",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/02.jpg',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/02.lrc',
        theme: '#FEB9D1'
    }, {
        name: "エガオノキミヘ",
        artist: "三森すずこ",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/03.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/03.lrc',
        theme: '#FEB9D1'
    }, {
        name: "アシタノハナタチ",
        artist: "讃州中学勇者部",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/04.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/04.lrc',
        theme: '#FEB9D1'
    }, {
        name: "地平線の向こうへ",
        artist: "讃州中学勇者部",
        url: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/05.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/Yuyuyu/05.lrc',
        theme: '#FEB9D1'
    }, {
        name: "光るなら",
        artist: "Goose house",
        url: 'https://music-for-blog.haf208.cc/local-pkg/SRCL-8640/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/SRCL-8640/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/SRCL-8640/01.lrc',
        theme: '#E7C7B8'
    }, {
        name: "Heartily Song",
        artist: "Lia",
        url: 'https://music-for-blog.haf208.cc/local-pkg/KSLM-0099/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/KSLM-0099/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/KSLM-0099/01.lrc',
        theme: '#9FEEFF'
    }, {
        name: "鳥の詩",
        artist: "Lia",
        url: 'https://music-for-blog.haf208.cc/local-pkg/PCCA-90028/d1/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/PCCA-90028/d1/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/PCCA-90028/d1/05.lrc',
        theme: '#FFBA83'
    }, {
        name: "今、歩き出す君へ",
        artist: "Ceui",
        url: 'https://music-for-blog.haf208.cc/local-pkg/LACA-15283/08.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/LACA-15283/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/LACA-15283/08.lrc',
        theme: '#FFC1B4'
    }, {
        name: "灼け落ちない翼",
        artist: "多田葵",
        url: 'https://music-for-blog.haf208.cc/local-pkg/KSLA-0103/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/KSLA-0103/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/KSLA-0103/02.lrc',
        theme: '#77ADFF'
    }, {
        name: "銀の龍の背に乗って",
        artist: '中岛みゆき',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/01.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/others/01.lrc',
        theme: '#C69480'
    }, {
        name: "雪の華",
        artist: '中島美嘉',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/02.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/others/02.lrc',
        theme: '#484632'
    }, {
        name: "雪の華",
        artist: '南條愛乃',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/umca-10015.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/others/03.lrc',
        theme: '#AEA191'
    }, {
        name: "銀の龍の背に乗って",
        artist: '佐藤聡美',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/umca-10015.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/others/04.lrc',
        theme: '#AEA191'
    }, {
        name: "空も飛べるはず",
        artist: 'Twinkle Voice All Stars',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/umca-10015.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/others/05.lrc',
        theme: '#AEA191'
    }, {
        name: "キスのひとつで",
        artist: '佐咲紗花',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/08.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/08.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/08.lrc',
        theme: '#AEA191'
    }, {// fhána
        name: "星屑のインターリュード",
        artist: 'fhána',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/fhána/LACM-14279/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/fhána/LACM-14279/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/fhána/LACM-14279/01.lrc',
        theme: '#9279B7'
    }, {// fripSide
        name: "only my railgun",
        artist: 'fripSide',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/30.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/fripSide/GNCA-1582/30.lrc',
        theme: '#972C3F'
    }, {
        name: "LEVEL5-judgelight-",
        artist: 'fripSide',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/29.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/fripSide/GNCA-1582/29.lrc',
        theme: '#972C3F'
    }, {
        name: "future gazer",
        artist: 'fripSide',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/28.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/fripSide/GNCA-1582/28.lrc',
        theme: '#972C3F'
    }, {
        name: "Heaven is a Place On Earth",
        artist: 'fripSide',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/27.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/fripSide/GNCA-1582/27.lrc',
        theme: '#972C3F'
    }, {
        name: "sister's noise",
        artist: 'fripSide',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/23.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/fripSide/GNCA-1582/23.lrc',
        theme: '#972C3F'
    }, {
        name: "eternal reality",
        artist: 'fripSide',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/22.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/fripSide/GNCA-1582/22.lrc',
        theme: '#972C3F'
    }, {
        name: "final phase",
        artist: 'fripSide',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/fripSide/GNCA-1582/03.lrc',
        theme: '#972C3F'
    }, {
        name: "dual existence",
        artist: 'fripSide',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/fripSide/GNCA-1582/01.lrc',
        theme: '#972C3F'
    }, {
        name: "We Rise",
        artist: 'fripSide',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/fripSide/GNCA-1582/02.lrc',
        theme: '#972C3F'
    }, {
        name: "Hesitation Snow",
        artist: 'fripSide',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/25.m4a',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/fripSide/GNCA-1582/25.lrc',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/cover.jpg',
        theme: '#972C3F'
    }, {
        name: "endless memory ~refrain as Da Capo~",
        artist: "fripSide",
        url: 'https://music-for-blog.haf208.cc/local-pkg/fripSide/GNCA-1352/13.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/fripSide/GNCA-1352/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/fripSide/GNCA-1352/13.lrc',
        theme: '#EFCA70'
    }, {// Darling in the FranXX
        name: "トリカゴ",
        artist: 'XX:me',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/07.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/07.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/others/07.lrc',
        theme: '#46718B'
    }, {// Re:0
        name: "Redo",
        artist: '鈴木このみ',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/06.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/others/06.webp',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/others/06.lrc',
        theme: '#C9AFF8'
    }, {// Madoka
        name: "Postmeridie",
        artist: '梶浦由纪',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-9124/08.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Scaena felix",
        artist: '梶浦由纪',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-9124/12.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Venari strigas",
        artist: '梶浦由纪',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-9128/03.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Ave Maria",
        artist: '梶浦由纪',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-9128/12.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Numquam vincar",
        artist: '梶浦由纪',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-9132/01.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Surgam identidem",
        artist: '梶浦由纪',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-9132/04.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Sagitta luminis",
        artist: '梶浦由纪',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-9132/06.m4a',
        theme: '#FFC0D3'
    }, {
        name: "Pergo pugnare",
        artist: '梶浦由纪',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-9132/12.m4a',
        theme: '#FFC0D3'
    }, {
        name: "her wings",
        artist: '梶浦由纪',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-3133/35.m4a',
        theme: '#FFC0D3'
    }, {
        name: "for the next episode",
        artist: '梶浦由纪',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-3133/37.m4a',
        theme: '#FFC0D3'
    }, {
        name: "コネクト",
        artist: 'ClariS',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/SECL-946/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/SECL-946/cover.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/madoka/SECL-946/01.lrc',
        theme: '#FFC0D3'
    }, {
        name: "また あした",
        artist: '鹿目まどか (悠木碧)',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/SVWC-7980/23.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/SVWC-7980/cover.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/madoka/SVWC-7980/23.lrc',
        theme: '#FFC0D3'
    }, {
        name: "ルミナス",
        artist: 'ClariS',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/SECL-1196/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/SECL-1196/cover.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/madoka/SECL-1196/01.lrc',
        theme: '#FFC0D3'
    }, {
        name: "Friends",
        artist: 'ClariS',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/SECL-1196/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/SECL-1196/cover.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/madoka/SECL-1196/02.lrc',
        theme: '#FFC0D3'
    }, {
        name: "we're here for you",
        artist: '梶浦由記',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-3533/37.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-3533/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "take your hands",
        artist: '梶浦由記',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-3533/38.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-3533/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "wings of relief",
        artist: '梶浦由記',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-3533/39.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-3533/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "I was waiting for this moment",
        artist: '梶浦由記',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-3533/40.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-3533/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "her new wings",
        artist: '梶浦由記',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-3533/41.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/ANZX-3533/cover.jpg',
        theme: '#FFC0D3'
    }, {
        name: "カラフル -movie MIX-",
        artist: 'ClariS',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/SECL-1416/04.m4a',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/madoka/SECL-1416/04.lrc',
        theme: '#FFC0D3'
    }, {
        name: "君の銀の庭",
        artist: 'Kalafina',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/SECL-1422/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-03/madoka/SECL-1422/cover.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/madoka/SECL-1422/01.lrc',
        theme: '#0066CC'
    }, {// ATRI
        name: "光放て!",
        artist: '柳麻美',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/atri/21.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/atri/cover.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/atri/21.lrc',
        theme: '#7CD5F8'
    }, {
        name: "Dear Moments",
        artist: '赤尾ひかる',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/atri/24.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/atri/cover.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/atri/24.lrc',
        theme: '#7CD5F8'
    }, {// LoveLive
        name: "始まりの朝(メインテーマ)",
        artist: '藤澤慶昌',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/01.jpg',
        theme: '#FFAE2E'
    }, {
        name: "Music S.T.A.R.T!!",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/us/20.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/us/20.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/us/20.lrc',
        theme: '#EAA725'
    }, {
        name: "Snow halation",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/02.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/02.lrc',
        theme: '#E1E1E1'
    }, {
        name: "ススメ→トゥモロウ",
        artist: "高坂穂乃果...",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/03.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/03.lrc',
        theme: '#FFAE2E'
    }, {
        name: "START：DASH！！",
        artist: "高坂穂乃果...",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/03.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/04.lrc',
        theme: '#7AEBF9'
    }, {
        name: "僕らは今のなかで",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/05.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/05.lrc',
        theme: '#FFAE2E'
    }, {
        name: "きっと青春が聞こえる",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/07.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/07.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/07.lrc',
        theme: '#FFAE2E'
    }, {
        name: "それは僕たちの奇跡",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/08.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/08.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/08.lrc',
        theme: '#FFAE2E'
    }, {
        name: "ユメノトビラ",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/09.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/09.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/09.lrc',
        theme: '#8DF9F6'
    }, {
        name: "Dancing stars on me！",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/06.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/06.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/06.lrc',
        theme: '#FFAE2E'
    }, {
        name: "Love wing bell",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/10.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/06.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/10.lrc',
        theme: '#FFADC0'
    }, {
        name: "KiRa-KiRa Sensation！",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/11.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/11.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/11.lrc',
        theme: '#FFADC0'
    }, {
        name: "どんなときもずっと",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/12.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/12.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/12.lrc',
        theme: '#FFB800'
    }, {
        name: "ステージへと続く道",
        artist: '藤澤慶昌',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/19.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/19.jpg',
        theme: '#FFAE2E'
    }, {
        name: "SUNNY DAY SONG",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/16.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/16.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/16.lrc',
        theme: '#FF9B00'
    }, {
        name: "僕たちはひとつの光",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/17.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/17.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/17.lrc',
        theme: '#F2C7D3'
    }, {
        name: "冬がくれた予感",
        artist: "BiBi",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/13.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/13.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/13.lrc',
        theme: '#DAFFF9'
    }, {
        name: "Cutie Panther",
        artist: "BiBi",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/us/21.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/us/21.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/us/21.lrc',
        theme: '#EF608C'
    }, {
        name: "夏、終わらないで。",
        artist: "BiBi",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/us/22.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/us/21.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/us/22.lrc',
        theme: '#DAFFF9'
    }, {
        name: "LOVELESS WORLD",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/14.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/14.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/14.lrc',
        theme: '#DAFFF9'
    }, {
        name: "MOMENT RING",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/18.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/15.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/18.lrc',
        theme: '#FFB800'
    }, {
        name: "さようならへさよなら！",
        artist: "μ's",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/15.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-05/lovelive/us/15.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/us/15.lrc',
        theme: '#FFB800'
    }, {
        name: "青空Jumping Heart",
        artist: "Apours",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/lovelive/aqours/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/lovelive/aqours/01.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/aqours/01.lrc',
        theme: '#4DCAFF'
    }, {
        name: "Awaken the power",
        artist: "Saint Aqours Snow",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/02.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/02.lrc',
        theme: '#6E42DD'
    }, {
        name: "Believe again",
        artist: "Saint Snow",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/03.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/03.lrc',
        theme: '#B93DEC'
    }, {
        name: "WATER BLUE NEW WORLD",
        artist: "Aqours",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/04.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/04.lrc',
        theme: '#41C3FF'
    }, {
        name: "WONDERFUL STORIES",
        artist: "Aqours",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/04.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/05.lrc',
        theme: '#99F262'
    }, {
        name: "Brightest Melody",
        artist: "Aqours",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/06.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/06.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/06.lrc',
        theme: '#A895B0'
    }, {
        name: "Next SPARKLING!!",
        artist: "Aqours",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/07.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/06.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/07.lrc',
        theme: '#A895B0'
    }, {
        name: "未体験HORIZON",
        artist: "Aqours",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/08.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/06.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/aqours/08.lrc',
        theme: '#A895B0'
    }, {
        name: "虹色Passions!",
        artist: "虹ヶ咲学園スクールアイドル同好会",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/lovelive/nijigasaki/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/lovelive/nijigasaki/01.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/nijigasaki/01.lrc',
        theme: '#D7D7D7'
    }, {
        name: "Colorful Dreams! Colorful Smiles!",
        artist: "虹ヶ咲学園...",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/lovelive/nijigasaki/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/lovelive/nijigasaki/02.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/nijigasaki/02.lrc',
        theme: '#D7D7D7'
    }, {
        name: "START!! True dreams",
        artist: "Liella!",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/lovelive/liella/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/lovelive/liella/01.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/liella/01.lrc',
        theme: '#FF5757'
    }, {
        name: "始まりは君の空",
        artist: "Liella!",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/liella/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/liella/02.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/liella/02.lrc',
        theme: '#63A2FA'
    }, {
        name: "未来予報ハレルヤ！",
        artist: "Liella!",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/liella/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/liella/03.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/liella/03.lrc',
        theme: '#63A2FA'
    }, {
        name: "常夏☆サンシャイン",
        artist: "Liella!",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/liella/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/liella/04.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/liella/04.lrc',
        theme: '#35F1AE'
    }, {
        name: "Starlight Prologue",
        artist: "Liella!",
        url: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/liella/05.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/liella/05.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/lovelive/liella/05.lrc',
        theme: '#FEDB61'
    }, {
        name: "LIVE with a smile!",
        artist: "Apours&ニジガク&Liella!",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/lovelive/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/lovelive/01.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/lovelive/01.lrc',
        theme: '#EE6A82'
    }, {// 227
        name: "曇り空の向こうは晴れている",
        artist: "22/7",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/227/SRCL-12642/12.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/227/SRCL-12642/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/227/SRCL-12642/12.lrc',
        theme: '#A3A09E'
    }, {
        name: "僕は今夜、出て行く",
        artist: "22/7",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/227/SRCL-12642/09.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/227/SRCL-12642/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/227/SRCL-12642/09.lrc',
        theme: '#A3A09E'
    }, {
        name: "世界の矛盾",
        artist: "22/7",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/227/SRCL-12642/11.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/227/SRCL-12642/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-01/227/SRCL-12642/11.lrc',
        theme: '#A3A09E'
    },  // BanG Dream!
    {   // MyGO!!!!!
        name: "壱雫空",
        artist: "MyGO!!!!!",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/bangdream/mygo/BRMM-10716/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/bangdream/mygo/BRMM-10716/cover.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/bangdream/mygo/BRMM-10716/02.lrc',
        theme: '#8DABC2'
    }, {
        name: "潜在表明",
        artist: "MyGO!!!!!",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/bangdream/mygo/BRMM-10716/06.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/bangdream/mygo/BRMM-10716/cover.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/bangdream/mygo/BRMM-10716/06.lrc',
        theme: '#8DABC2'
    }, {
        name: "春日影",
        artist: "MyGO!!!!!",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/bangdream/mygo/BRMM-10716/08.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/bangdream/mygo/BRMM-10716/cover.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/bangdream/mygo/BRMM-10716/08.lrc',
        theme: '#8DABC2'
    }, {
        name: "詩超絆",
        artist: "MyGO!!!!!",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/bangdream/mygo/BRMM-10716/09.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/bangdream/mygo/BRMM-10716/cover.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/bangdream/mygo/BRMM-10716/09.lrc',
        theme: '#8DABC2'
    }, {
        name: "栞",
        artist: "MyGO!!!!!",
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/bangdream/mygo/BRMM-10716/13.m4a',
        cover: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-02/bangdream/mygo/BRMM-10716/cover.jpg',
        lrc:'https://music-for-blog.haf208.cc/lokocdnms-pkg-exlrc/bangdream/mygo/BRMM-10716/13.lrc',
        theme: '#F8D9B6'
    }, {//Ave Mujica
        name: "Ave Mujica",
        artist: "Ave Mujica",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10672/06.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10672/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10672/06.lrc',
        theme: '#472459'
    }, {//Poppin'Party
        name: "STAR BEAT! ～ホシノコドウ～",
        artist: "Poppin'Party",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10044/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10044/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10044/01.lrc',
        theme: '#88C1FB'
    }, {
        name: "走り始めたばかりのキミに",
        artist: "Poppin'Party",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10056/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10056/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10056/01.lrc',
        theme: '#DBA84E'
    }, {
        name: "ティアドロップス",
        artist: "Poppin'Party",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10056/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10056/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10056/02.lrc',
        theme: '#DBA84E'
    }, {
        name: "ときめきエクスペリエンス！",
        artist: "Poppin'Party",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10065/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10065/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10065/01.lrc',
        theme: '#6FEFFF'
    }, {
        name: "1000回潤んだ空",
        artist: "Poppin'Party",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10065/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10065/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10065/02.lrc',
        theme: '#6FEFFF'
    }, {
        name: "Happy Happy Party!",
        artist: "Poppin'Party",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10066/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10066/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10066/02.lrc',
        theme: '#FFB865'
    }, {
        name: "前へススメ!",
        artist: "Poppin'Party",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10084/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10084/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10084/01.lrc',
        theme: '#BB5E3A'
    }, {
        name: "Time Lapse",
        artist: "Poppin'Party",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10096/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10096/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10096/01.lrc',
        theme: '#D96430'
    }, {
        name: "二重の虹 (ダブル レインボウ)",
        artist: "Poppin'Party",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10126/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10126/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10126/01.lrc',
        theme: '#FBC864'
    }, {
        name: "切ないSandglass",
        artist: "Poppin'Party",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10135/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10135/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10135/02.lrc',
        theme: '#A7D4EE'
    }, {
        name: "Returns",
        artist: "Poppin'Party",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10191/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10191/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10191/02.lrc',
        theme: '#83C2E6'
    }, {
        name: "夢を撃ち抜く瞬間に!",
        artist: "Poppin'Party",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10222/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10222/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10222/02.lrc',
        theme: '#FF8E4B'
    }, {
        name: "SAKURA MEMORIES",
        artist: "Poppin'Party",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10222/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10222/cover.jpg',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10222/03.lrc',
        theme: '#FFABBA'
    }, {//Afterglow
        name: "ツナグ、ソラモヨウ",
        artist: "Afterglow",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10133/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10133/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10133/01.lrc',
        theme: '#E53344'
    }, {//RAISE A SUILEN
        name: "DRIVE US CRAZY",
        artist: "RAISE A SUILEN",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10228/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10228/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10228/01.lrc',
        theme: '#535353'
    }, {
        name: "HELL! or HELL?",
        artist: "RAISE A SUILEN",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10228/02.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10228/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10228/02.lrc',
        theme: '#535353'
    }, {
        name: "CORUSCATE-DNA-",
        artist: "RAISE A SUILEN",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10519/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10519/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10519/01.lrc',
        theme: '#535353'
    }, {//Roselia
        name: "FIRE BIRD",
        artist: "Roselia",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10267/04.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10267/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10267/04.lrc',
        theme: '#3344AA'
    }, {
        name: "Song I am.",
        artist: "Roselia",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10267/12.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10267/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10267/12.lrc',
        theme: '#3344AA'
    }, {
        name: "Proud of oneself",
        artist: "Roselia",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10408/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10408/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10408/01.lrc',
        theme: '#3344AA'
    }, {
        name: "Sing Alive",
        artist: "Roselia",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10408/03.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10408/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10408/03.lrc',
        theme: '#3344AA'
    }, {
        name: "Sprechchor",
        artist: "Roselia",
        url: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10473/01.m4a',
        cover: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10473/cover.webp',
        lrc: 'https://music-for-blog.haf208.cc/local-pkg/bangdream/BRMM-10473/01.lrc',
        theme: '#3344AA'
    }
    ]
});
