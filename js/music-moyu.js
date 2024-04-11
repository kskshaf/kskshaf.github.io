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
    {
        name: "さくら、Reincarnation -Arrange-",
        artist: '忍',
        url: 'https://unpkg.com/moyu-cdnms-pkg-01@0.0.1/disc4-14.m4a',
        theme: '#FE8FA7'
    }
    ]
});
