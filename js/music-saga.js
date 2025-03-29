// if there is any infringement, please contact delete!: github.com/kskshaf/kskshaf.github.io
const saga = new APlayer({
    container: document.getElementById('ms-saga'),
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
    // Saga
    {   // EYCA-12682
        name: "ようこそ佐賀へ",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/01.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        theme: '#A2A09D'
    }, {
        name: "徒花ネクロマンシー Album ver.",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/02.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/02.lrc',
        theme: '#A2A09D'
    }, {
        name: "DEAD or RAP！！！",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/03.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/03.lrc',
        theme: '#A2A09D'
    }, {
        name: "目覚めRETURNER",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/04.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/04.lrc',
        theme: '#A2A09D'
    }, {
        name: "ドライブイン鳥 フランシュシュver.",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/05.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/05.lrc',
        theme: '#A2A09D'
    }, {
        name: "アツクナレ",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/06.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/06.lrc',
        theme: '#A2A09D'
    }, {
        name: "目覚めRETURNER  (Electric Returner)",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/07.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/07.lrc',
        theme: '#A2A09D'
    }, {
        name: "To my Dearest",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/08.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/08.lrc',
        theme: '#A2A09D'
    }, {
        name: "佐賀事変",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/09.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/09.lrc',
        theme: '#A2A09D'
    }, {
        name: "特攻DANCE ~DAWN OF THE BAD~",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/10.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/10.lrc',
        theme: '#A2A09D'
    }, {
        name: "ヨミガエレ",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/11.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/11.lrc',
        theme: '#A2A09D'
    }, {
        name: "FLAGをはためかせろ！",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/12.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/12.lrc',
        theme: '#A2A09D'
    }, {
        name: "輝いて",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/13.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/13.lrc',
        theme: '#A2A09D'
    }, {
        name: "光へ",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/14.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/14.lrc',
        theme: '#A2A09D'
    }, {
        name: "FANTASTIC LOVERS",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/15.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/15.lrc',
        theme: '#A2A09D'
    }, {
        name: "ゼリーフィッシュ",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/16.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/16.lrc',
        theme: '#A2A09D'
    }, {
        name: "サガ・アーケードラップ",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/17.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/17.lrc',
        theme: '#A2A09D'
    }, {
        name: "To my Dearest~Lily's practice singing~",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/18.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        theme: '#A2A09D'
    }, {
        name: "宣誓！ALIVE センセーション",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-12682/19.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/19.lrc',
        theme: '#A2A09D'
    }, {// EYXA-13353B
        name: "イカの魂無駄にはしない ～小島食品工場株式会社社歌～",
        artist: "小島食品工場スタッフ",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13353B/01.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/01.lrc',
        theme: '#D669D2'
    }, {
        name: "REVENGE",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13353B/02.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/02.lrc',
        theme: '#D669D2'
    }, {
        name: "風の強い日は嫌いか? FranChouChou cover",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13353B/03.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/03.lrc',
        theme: '#D669D2'
    }, {
        name: "目覚めRETURNER (3号ソロver.)",
        artist: "フランシュシュ3号 (種田梨沙)",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13353B/04.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/04.lrc',
        theme: '#D669D2'
    }, {
        name: "50と4つの忘れ物",
        artist: "紺野純子 (河瀬茉希)",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13353B/05.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/05.lrc',
        theme: '#D669D2'
    }, {
        name: "激昂サバイブ",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13353B/06.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/06.lrc',
        theme: '#D669D2'
    }, {
        name: '目覚めRETURNER (Electric Returner Type "R")',
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13353B/07.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13353B/07.lrc',
        theme: '#D669D2'
    }, {// EYXA-13354B
        name: "命",
        artist: "大空ライト (阿部カノン)",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13354B/01.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13354B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13354B/01.lrc',
        theme: '#16D3A9'
    }, {
        name: "リトルパラッポ",
        artist: "フランシュシュ6号 (田中美海)",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13354B/02.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13354B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13354B/02.lrc',
        theme: '#16D3A9'
    }, {
        name: "今日はカレーだイェイイェイイェイ",
        artist: "男の子マンションズ (YU-G, 田端未来)",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13354B/03.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13354B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13354B/03.lrc',
        theme: '#16D3A9'
    }, {
        name: "ぶっちゃけてフォーユー",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13354B/04.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13354B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13354B/04.lrc',
        theme: '#16D3A9'
    }, {
        name: "光へ (with 7号ver.)",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13354B/05.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13354B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-12682/14.lrc', // re-use
        theme: '#16D3A9'
    }, {// EYXA-13355B
        name: "Never ending saga",
        artist: "山下洋介",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13355B/01.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/01.lrc',
        theme: '#EEB1D7'
    }, {
        name: "輝いて (TV size)",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13355B/02.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/02.lrc',
        theme: '#EEB1D7'
    }, {
        name: "追い風トラベラーズ",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13355B/03.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/03.lrc',
        theme: '#EEB1D7'
    }, {
        name: "breath of SAGA",
        artist: "唐沢美帆(曲:山下洋介)",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13355B/04.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/cover.webp',
        theme: '#EEB1D7'
    }, {
        name: "佐賀がサガであるために ～ジングル～",
        artist: "山下洋介",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13355B/05.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/cover.webp',
        theme: '#EEB1D7'
    }, {
        name: "佐賀がサガであるために ～テーマ～",
        artist: "山下洋介",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13355B/06.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/cover.webp',
        theme: '#EEB1D7'
    }, {
        name: "STOMP!!!!!",
        artist: "陶山隼",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13355B/07.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/cover.webp',
        theme: '#EEB1D7'
    }, {
        name: "Showdown",
        artist: "陶山隼",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13355B/08.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/cover.webp',
        theme: '#EEB1D7'
    }, {
        name: "タさリの霧",
        artist: "陶山隼",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13355B/09.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/cover.webp',
        theme: '#EEB1D7'
    }, {
        name: "ChouChouture",
        artist: "加藤裕介",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13355B/10.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/cover.webp',
        theme: '#EEB1D7'
    }, {
        name: "激昴サバイブ (Complete Edition)",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYXA-13355B/11.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYXA-13355B/11.lrc',
        theme: '#EEB1D7'
    }, {// EYCA-13356
        name: "大河よ共に泣いてくれ",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-13356/01.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-13356/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-13356/01.lrc',
        theme: '#3E3C2D'
    }, {// EYCA-13357
        name: "夢を手に、戻れる場所もない日々を",
        artist: "FranChouChou",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-13357/01.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-13357/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-13357/01.lrc',
        theme: '#3E3C2D'
    }, {
        name: "風の強い日は嫌いか?",
        artist: "ホワイト竜 (白竜)",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/Saga/EYCA-13357/02.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-13357/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/Saga/EYCA-13357/02.lrc',
        theme: '#3E3C2D'
    }
    ]
});
