// if there is any infringement, please contact delete!: github.com/kskshaf/kskshaf.github.io
const hatuyuki = new APlayer({
    container: document.getElementById('ms-hatuyuki-sakura'),
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
        name: "Hesitation Snow",
        artist: 'fripSide',
        url: 'https://music-for-blog.haf208.cc/lokocdnms-pkg-04/fripSide/GNCA-1582/25.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/fripSide/GNCA-1582/25.lrc',
        theme: '#CEE3FA'
    }, {
        name: "初雪の日に",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/02.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "内田川邊を歩く",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/03.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "ガラスの瞳",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/04.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "真冬の香り",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/05.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "蘭の香り",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/06.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "ゴーストって知ってる？",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/07.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "Ghost town",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/08.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "大泥棒の足音",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/09.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "大泥棒のお出まし",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/10.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "freak of nature : start",
        artist: '彩菜',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/11.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "Decline",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/12.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "Ruined",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/13.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "Ghost child",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/14.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "死者の嘆き",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/15.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "1095日の憂鬱",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/16.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "生者の嘆き",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/17.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "Dead's dream",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/18.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "Ghost parade",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/19.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "風花",
        artist: '月子',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost1/20.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/hatuyuki-sakura/01.lrc',
        theme: '#CEE3FA'
    }, {// DISC2
        name: "Presto",
        artist: 'KOTOKO',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/01.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/hatuyuki-sakura/02.lrc',
        theme: '#CEE3FA'
    }, {
        name: "白い花咲く学舎で",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/02.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "まーるいシッポ",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/03.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "はい、マカロン.",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/04.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "ナイトダンス",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/05.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "委員長にお任せあれ",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/06.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "グルルシロ！",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/07.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "うぜぇ奴ら",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/08.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "ふざけた奴ら",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/09.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "元気があれば何でも出来る！",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/10.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "メリーゴーランドをぶっ壊せ",
        artist: '結衣菜',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/11.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/hatuyuki-sakura/04.lrc',
        theme: '#CEE3FA'
    }, {
        name: "Snow light",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/12.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "Snow prince",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/13.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "Snow princess",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/14.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "冬を愛する人",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/15.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "春を愛する人",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/16.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "送る言葉",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/17.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "桜の心",
        artist: '水月陵',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/18.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }, {
        name: "GHOST×GRADUATION",
        artist: 'monet',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/19.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        lrc: 'https://pic-lrc-bed.haf208.cc/music/lokocdnms-pkg-exlrc/hatuyuki-sakura/03.lrc',
        theme: '#CEE3FA'
    }, {
        name: "GHOST×GRADUATION Inst",
        artist: 'ピクセルビー',
        url: 'https://music-for-blog.haf208.cc/hatuyuki-sakura-ost2/20.m4a',
        cover: 'https://pic-lrc-bed.haf208.cc/music/hatuyuki-sakura-ost1/cover.jpg',
        theme: '#CEE3FA'
    }
    ]
});
