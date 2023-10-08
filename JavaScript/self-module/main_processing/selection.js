function generate_selection(){
    
    (function() {
        const request = new XMLHttpRequest();
        request.open('GET', 'https://script.google.com/macros/s/AKfycbwmJ81ez1wrTdjRoGPc8FbDhh5UTYp8R5N9-zGGhKpW1rEf1dDpZw9NgZwPQ9IUrwGz/exec');
            request.responseType = 'json';
            request.onload = function () {
                data = this.response;
                add_lrc_selection(data)
            };
        request.send();
    })();

    function add_lrc_selection(data){

        for(d in data){
            let url = data[d]["URL"];
            let f_id = d
            let thumbnail = `<img 
            class="thumbnail"src="http://img.youtube.com/vi/${url}/mqdefault.jpg" name="${f_id}">`
            document.getElementById('lrc_select').insertAdjacentHTML("beforeend",thumbnail);
        }
        document.querySelectorAll("#lrc_select img").forEach((imgElm) => {
            imgElm.addEventListener('click', img_clickEvent);
        })
    }
    
    function img_clickEvent(e){
        is_F4 = false;
        lrc_set(e.target.getAttribute("name"));
        play_id = e.target.getAttribute("name");
    }

    function lrc_set(id){
        video_set(data[id]["URL"]);
        lyrics(data[id]["KASHI"]);
        kana_lyrics(data[id]["YOMI"]);
        show_ranking(id);
        player.seekTo(0);
        scrollTo(0,0);
    }

    function video_set(YT_URL){
        player.cueVideoById(YT_URL);
        reset();
    }
}
