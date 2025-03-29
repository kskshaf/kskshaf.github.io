// if there is any infringement, please contact delete!: github.com/kskshaf/kskshaf.github.io
const gsenjou = new APlayer({
    container: document.getElementById('ms-gsenjou'),
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
        name: "G線上のアリア #1",
        artist: "J.S. Bach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/01.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "愛憎の成れの果て",
        artist: "藤田淳平",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/02.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "Answer",
        artist: "片雾烈火",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/03.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/d1/03.lrc',
        theme: '#A59484'
    }, {
        name: "うららか",
        artist: "Edvard Grieg",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/04.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "朝の挨拶",
        artist: "Johann Pachelbel",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/05.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "昼の遊び",
        artist: "Ludwig van Beethoven",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/06.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "いま、最高か",
        artist: "Jacques Offenbach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/07.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "空の夕",
        artist: "Erik Satie",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/08.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "白夜",
        artist: "Claude Debussy",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/09.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "白夜の前",
        artist: "Claude Debussy",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/10.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "半スベり",
        artist: "Aram Il'ich Khachaturian",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/11.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "疑惑",
        artist: "Fryderyk Franciszek Chopin",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/12.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "疑念",
        artist: "Fryderyk Franciszek Chopin",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/13.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "疑問",
        artist: "Fryderyk Franciszek Chopin",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/14.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "真実",
        artist: "Felix Mendelssohn",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/15.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "真実の跡",
        artist: "Felix Mendelssohn",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/16.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "抱擁",
        artist: "Georg Friedrich Händel",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/17.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "闘争",
        artist: "Modest Petrovich Mussorgsky",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/18.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "闘争の続き",
        artist: "Modest Petrovich Mussorgsky",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/19.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "悟り",
        artist: "Modest Petrovich Mussorgsky",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/20.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "愛",
        artist: "Ludwig van Beethoven",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/21.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "さようなら",
        artist: "tiko-μ",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/22.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "再会の日",
        artist: "Antonín Dvořák",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/23.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "安らぎの夜",
        artist: "Johannes Brahms",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/24.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "対決",
        artist: "Richard Wagner",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/25.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "男の花道",
        artist: "藤田淳平",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/26.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "愛した女",
        artist: "藤田淳平",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/27.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "道は氷河なり",
        artist: "藤田淳平",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/28.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "G線上のアリア #2",
        artist: "J.S. Bach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d1/29.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {   // DISC 2
        name: "我が母の教えたまいし歌",
        artist: "Antonín Dvořák",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/01.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "瞳を閉じて #1",
        artist: "志仓千代丸",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/02.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "Close Your Eyes",
        artist: "彩音",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/03.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/d2/03.lrc',
        theme: '#A59484'
    }, {
        name: "G線上のアリア #3",
        artist: "J.S. Bach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/04.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "雪 #1",
        artist: "Traditional",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/05.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "雪 #2",
        artist: "Traditional",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/06.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "雪 #3",
        artist: "Traditional",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/07.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "恐慌",
        artist: "J.S. Bach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/08.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "家畜の群れ",
        artist: "J.S. Bach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/09.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "死神",
        artist: "J.S. Bach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/10.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "影の誘い",
        artist: "Franz Schubert",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/11.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "闇の誘い",
        artist: "Franz Schubert",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/12.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "腐食",
        artist: "Charles-Camille Saint-Saëns",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/13.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "落日",
        artist: "Franz Schubert",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/14.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "逃げ場なし",
        artist: "Ludwig van Beethoven",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/15.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "The Devil",
        artist: "Franz Schubert",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/16.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "The Devil #2",
        artist: "Franz Schubert",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/17.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "我が母はかく語りし",
        artist: "Johann Pachelbel",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/18.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "瞳を閉じて #2",
        artist: "志仓千代丸",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/19.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "瞳を閉じて #3",
        artist: "志仓千代丸",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/20.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "G線上のアリア #4",
        artist: "J.S. Bach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d2/21.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {   // DISC 3
        name: "G線上のアリア #5",
        artist: "J.S. Bach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/01.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "郷愁",
        artist: "Ludwig van Beethoven",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/02.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "交錯",
        artist: "J.S. Bach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/03.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "出落ち",
        artist: "Pyotr Ilyich Tchaikovsky",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/04.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "一休み",
        artist: "Scott Joplin",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/05.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "追求",
        artist: "Charles-Camille Saint-Saëns",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/06.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "蠢動",
        artist: "Edvard Grieg",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/07.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "真相",
        artist: "Charles-Camille Saint-Saëns",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/08.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "浅井権三",
        artist: "Pyotr Ilyich Tchaikovsky",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/09.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "地上に現れし地獄",
        artist: "Carl Orff",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/10.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "地獄の続き",
        artist: "Carl Orff",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/11.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "暗夜航路",
        artist: "Carl Orff",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/12.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "雌雄",
        artist: "Ludwig van Beethoven",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/13.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "決着",
        artist: "Ludwig van Beethoven",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/14.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "ワルキューレの騎行",
        artist: "Richard Wagner",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/15.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "ピカレスク",
        artist: "Georges Bizet",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/16.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "G線上のアリア #6",
        artist: "J.S. Bach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/17.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "雪の羽 時の風",
        artist: "Barbarian on the Groove feat. Chata",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/18.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/d3/18.lrc',
        theme: '#A59484'
    }, {
        name: "恐怖",
        artist: "J.S. Bach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/19.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "ダーク",
        artist: "Franz Schubert",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/20.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "魔王3",
        artist: "Franz Schubert",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/21.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "小フーガ",
        artist: "J.S. Bach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/22.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "グノシェンヌ",
        artist: "Erik Satie",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/23.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "月光 #1～第3楽章",
        artist: "Ludwig van Beethoven",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/24.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "月光 #2～第3楽章",
        artist: "Ludwig van Beethoven",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/25.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }, {
        name: "G線上のアリア #7",
        artist: "J.S. Bach",
        url: 'https://zh-1919810-blogmusic.oss-cn-guangzhou.aliyuncs.com/local-pkg/g-senjou/d3/26.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/local-pkg/g-senjou/cover.webp',
        theme: '#A59484'
    }]
});
