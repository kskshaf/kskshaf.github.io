// if there is any infringement, please contact delete!: github.com/kskshaf/kskshaf.github.io
const sakurumoyu = new APlayer({
    container: document.getElementById('music-sakura-moyu'),
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
    {   // DISC1
        name: "さくら、Reincarnation",
        artist: '佐咲紗花',
        url: 'https://unpkg.com/moyu-cdnms-pkg-01@1.0.0/01.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/disc1/01.lrc',
        theme: '#FE8FA7'
    }, {
        name: "終わらない物語",
        artist: '鈴湯',
        url: 'https://unpkg.com/moyu-cdnms-pkg-01@1.0.0/02.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/disc1/02.lrc',
        theme: '#FE8FA7'
    }, {
        name: "さくら、もゆ。",
        artist: '夏和小',
        url: 'https://unpkg.com/moyu-cdnms-pkg-01@1.0.0/03.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/disc1/03.lrc',
        theme: '#FE8FA7'
    }, {
        name: "輪廻",
        artist: '山本美禰子',
        url: 'https://unpkg.com/moyu-cdnms-pkg-01@1.0.0/04.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/disc1/04.lrc',
        theme: '#FE8FA7'
    }, {
        name: "花あかりの時",
        artist: 'eufonius',
        url: 'https://unpkg.com/moyu-cdnms-pkg-01@1.0.0/05.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        lrc: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/disc1/05.lrc',
        theme: '#FE8FA7'
    }, {
        name: "さくら、Reincarnation - Instrumental",
        artist: 'FAVORITE',
        url: 'https://unpkg.com/moyu-cdnms-pkg-01@1.0.0/06.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "終わらない物語 - Instrumental",
        artist: 'FAVORITE',
        url: 'https://unpkg.com/moyu-cdnms-pkg-01@1.0.0/07.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "さくら、もゆ。 - Instrumental",
        artist: 'FAVORITE',
        url: 'https://unpkg.com/moyu-cdnms-pkg-01@1.0.0/08.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "輪廻 - Instrumental",
        artist: 'FAVORITE',
        url: 'https://unpkg.com/moyu-cdnms-pkg-01@1.0.0/09.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "花あかりの時 - Instrumental",
        artist: 'FAVORITE',
        url: 'https://unpkg.com/moyu-cdnms-pkg-01@1.0.0/10.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    },
    // DISC2
    {
        name: "さくら、もゆ。 - title arrange",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/01.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "さくら、Reincarnation - opening version",
        artist: '佐咲紗花',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/02.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "桜並木の満開の下に",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/03.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "咲き誇る日々",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/04.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "Friendship",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/05.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "時計台の下で",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/06.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "あかねいろの情景",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/07.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "桜月夜",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/08.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "麗らかな生活",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/09.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "さくらいろのせかい",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/10.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "プリティーリズム",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/11.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "なちゅらるガール",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/12.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "DING! DONG!",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/13.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "春はみじかし恋せよ乙女",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/14.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "不思議パンタシア",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/15.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "抑えきれない想い",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/16.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "三日月の小夜曲 - クレセントムーンセレナーデ",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/17.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "くすりゆびのぬくもり",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/18.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "聖夜をめぐるまほう",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/19.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "神様からの手紙",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/20.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "はるのあしあと",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/21.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "リトルガール",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/22.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "Shrine maiden",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/23.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "満月の夜会",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-02/1.0.0/24.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    },
    // DISC3
    {
        name: "世界でいちばん優しい時間",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/01.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "忘れたいはずのなにか",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/02.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "愁い",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/03.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "忍び寄る運命",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/04.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "periculum.",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/05.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "桜雨",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/06.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "シュレーディンガーの夢",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/07.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "失われた刻をもとめて",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/08.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "遙か彼方/Re:frain",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/09.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "終わりなきナガレの果てに",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/10.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "春と修羅",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/11.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "モーメンテリィー・ハザード",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/12.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "Annihilation World's",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/13.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "さあ、咲き誇れ！",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/14.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "夜会(カコ)の記憶",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/15.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "朧月夜 - spring night with a hazy moon",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/16.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "わたしの想い",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/17.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "桜流",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/18.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "少女たちの夜会Ⅱ ver2",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/19.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "はるのあしあと - Arrange",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/20.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "さくら、もゆ。 - Instrumental feat.HARU",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-03/1.0.0/21.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    },
    // DISC4
    {
        name: "Reincarnation I",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/01.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "Reincarnation II",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/02.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "Reincarnation III",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/03.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "久遠アリア",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/04.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "Never land - よるのくに",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/05.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "少女たちの夜会I",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/06.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "少女たちの夜会II",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/07.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "地上の、ひとひら",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/08.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "さよならを言う前に",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/09.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "この美しい世界",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/10.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "光ある場所へ",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/11.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "ほしめぐるまほう",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/12.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "ホーリーナイト",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/13.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "さくら、Reincarnation - Arrange",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/14.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "輪廻 - Arrange",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/15.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "さくら、もゆ。 - orgel Arrange",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/16.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "終わらない物語 - Arrange",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/17.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "花あかりの時 - Arrange",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/18.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "満月の夜会 - Arrange",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/19.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    }, {
        name: "輪廻 - 2nd opening version",
        artist: '山本美禰子',
        url: 'https://unpkg.com/moyu-cdnms-pkg-04@1.0.0/20.m4a',
        cover: 'https://unpkg.com/lokocdnms-pkg-exlrc@1.0.5/sakura-moyu/cover.webp',
        theme: '#FE8FA7'
    },
    ]
});
