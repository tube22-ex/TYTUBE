function generate_selection(){
    
    (function() {
        const request = new XMLHttpRequest();
        request.open('GET', 'https://script.google.com/macros/s/AKfycbzxPcbqvA-Oc1Kbo-ljqBi4Kh114j-FapaINL4xg-CS5_HNFXajne8z_H4_2FpBXb_WCw/exec');
            request.responseType = 'json';
            request.onload = function () {
                data = this.response;
                add_lrc_selection(data)
            };
        request.send();
    })();

    function add_lrc_selection(data){

        for(d in data){
            const URL = data[d]["URL"];
            const TITLE = data[d]["TITLE"]
            const F_ID = d
            const THUMBNAIL = `<div><img 
            class="thumbnail"src="http://img.youtube.com/vi/${URL}/mqdefault.jpg" name="${F_ID}">${TITLE}</div>`
            document.getElementById('lrc_select').insertAdjacentHTML("beforeend",THUMBNAIL);
        }
        document.querySelectorAll("#lrc_select img").forEach((imgElm) => {
            imgElm.addEventListener('click', img_clickEvent);
        })

        gsap.set('.thumbnail',{autoAlpha: 1});
        gsap.from('.thumbnail', .5, {
            autoAlpha: 0,
            x: -500,
            y: -1000,
            stagger: {
                each: .5,
            }
        });
    }
    
    function img_clickEvent(e){
        let lrc_data;
        is_F4 = false;
        const req = new XMLHttpRequest();
        req.open('GET', 'https://script.google.com/macros/s/AKfycbzxPcbqvA-Oc1Kbo-ljqBi4Kh114j-FapaINL4xg-CS5_HNFXajne8z_H4_2FpBXb_WCw/exec?id=' + e.target.getAttribute("name"));
        req.responseType = 'json';
        req.onload = function () {
            lrc_data = this.response;
            lrc_set(lrc_data)
        };
        req.send();
        play_id = e.target.getAttribute("name");
        scrollTo(0,0);
    }

    function lrc_set(l_data){
        video_set(l_data[1]);
        lyrics(l_data[3]);
        kana_lyrics(l_data[4]);
        show_ranking(l_data[0]);
        player.seekTo(0);
        scrollTo(0,0);
    }

    function video_set(YT_URL){
        player.cueVideoById(YT_URL);
        reset();
    }
}
