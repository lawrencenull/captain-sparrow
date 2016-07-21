describe('TorrentProject torrent search', function () {

    var TorrentProjectTorrentProvider = include('torrentProvider/torrentProjectProvider');

    it('maps kickass torrents json', function () {

        var search = new TorrentProjectTorrentProvider(null, null);

        var results = search.mapResults(getSampleData());

        should.exist(results);
        results.length.should.be.above(0);

        var entry = results[0];

        should.exist(entry);
        should.exist(entry.seeds);
        should.exist(entry.leechs);
        should.exist(entry.size);
        should.exist(entry.name);
        should.exist(entry.torrentLink);
    });

    function getSampleData () {
        var x = JSON.parse(`{"1":{"title":"Udemy - Ubuntu Desktop for Beginners - Start Using Linux Today!","category":"video","seeds":2,"leechs":1,"torrent_size":972427296,"torrent_hash":"5a6623f3f28acc71e75e772e248fe02a465ccf26"},"2":{"title":"ubuntu-12.04.5-dvd-i386.iso","category":"all","seeds":18,"leechs":0,"torrent_size":1771438080,"torrent_hash":"83dc6b80801902b3f29ecec523bdd1e023a96dd0"},"3":{"title":"ubuntu-12.04.5-dvd-amd64.iso","category":"all","seeds":19,"leechs":1,"torrent_size":1788149760,"torrent_hash":"33d414562b3b452680c5b9cedd4eb1a29012b9fe"},"4":{"title":"ubuntu-12.04.4-dvd-i386.iso","category":"all","seeds":1,"leechs":0,"torrent_size":1741422592,"torrent_hash":"e951549ae339a9dc41384e5c2ea03d795f60198e"},"5":{"title":"XA_0613_DVD","category":"magazines","seeds":1,"leechs":0,"torrent_size":8443546405,"torrent_hash":"8a6b4a31f67570aa744ed0fc667abb93b842dc8f"},"6":{"title":"ubuntu-12.04.3-dvd-i386.iso","category":"all","seeds":1,"leechs":0,"torrent_size":1712865280,"torrent_hash":"2d2c7638a71fc6dc32376fe7866c7c2eded99d34"},"7":{"title":"ubuntu-12.04.3-dvd-amd64.iso","category":"all","seeds":1,"leechs":0,"torrent_size":1728053248,"torrent_hash":"0e4f9e15ef9fd2ac29eed4e0e8831072423618f1"},"8":{"title":"XA_1212_DVD","category":"games","seeds":0,"leechs":1,"torrent_size":8170726807,"torrent_hash":"0e27dc99df363bd2dee614b593a57d5b7296088f"},"9":{"title":"ubuntu-12.04.2-dvd-amd64.iso","category":"all","seeds":1,"leechs":0,"torrent_size":1706262528,"torrent_hash":"895dd90471edb175a3675fe8fcde03aaa8df1362"},"10":{"title":"\u041e\u0431\u043b\u043e\u0436\u043a\u0438 \u0434\u043b\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c","category":"applications","seeds":1,"leechs":0,"torrent_size":352975593,"torrent_hash":"2954e3a137c553c9ef31ff9c8fcd00e5f8743ec5"},"11":{"title":"ubuntu-12.04.2-dvd-i386.iso","category":"all","seeds":1,"leechs":0,"torrent_size":1691496448,"torrent_hash":"640efa1dddaca05d78e822f64d0859ab5dbee5e0"},"12":{"title":"Ubuntu.11.04.Desktop.2011.PC","category":"all","seeds":1,"leechs":0,"torrent_size":4217225507,"torrent_hash":"fc39aa3af8ec3f4c58bf0e89541781d63112145a"},"13":{"title":"Windows 8 Windows 7 Ubuntu Usb installers","category":"ebooks","seeds":0,"leechs":1,"torrent_size":11549998,"torrent_hash":"7424dd27ac785b29ec6abd1dbb692da5d538d72e"},"14":{"title":"Windows 8 Windows 7 Ubuntu Usb installers","category":"ebooks","seeds":3,"leechs":0,"torrent_size":9116579,"torrent_hash":"e761ceebe265d3b7d4044e2f1b1ba1884ed5c9d0"},"15":{"title":"Windows 8 Windows 7 Ubuntu Usb installers","category":"ebooks","seeds":0,"leechs":1,"torrent_size":9135168,"torrent_hash":"534a88c3a5d94b5c7b381c81e052710ef12698e2"},"16":{"title":"Windows 8 Windows 7 Ubuntu Usb installers","category":"ebooks","seeds":0,"leechs":1,"torrent_size":12265379,"torrent_hash":"002a31be5c48b07273b3cab81ab3131fe042469b"},"17":{"title":"Windows 8 Windows 7 Ubuntu Usb installers","category":"ebooks","seeds":9,"leechs":0,"torrent_size":19442516,"torrent_hash":"69c36553ed59c1115c0d3b67febb81db17f5449c"},"18":{"title":"ubuntu_12.04_lts_cd_dvd_x32_x64_[tfile.ru]","category":"all","seeds":1,"leechs":2,"torrent_size":6240264192,"torrent_hash":"7e29f79fe586d8aa8401ba92f95c69820978ce9c"},"19":{"title":"Windows 8 Windows 7 Ubuntu Usb installers","category":"ebooks","seeds":1,"leechs":0,"torrent_size":9104593,"torrent_hash":"ecc1359c18562ea3a9e2490356c406153f3cdf04"},"20":{"title":"Windows 8 Windows 7 Ubuntu Usb installers","category":"ebooks","seeds":1,"leechs":0,"torrent_size":9120723,"torrent_hash":"c411b25822e466bea0805cf58aee08c963fdbfc2"}}`);
        return Array.from(x)
            .map(x => Object.assign(x, {
                torrent_link: 'aaa'
            }));
    }

});
