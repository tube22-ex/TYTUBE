function onYouTubeIframeAPIReady() {

    player = new YT.Player('player', {
        width: '640', //幅
        height: '360',
        videoId: '',
        playerVars: {
            start: 0,
            startSeconds: 0,
            controls: 0, // コントロールバーを非表示にする
            enablejsapi: 1,
            disablekb: 1,
            rel: 0,
            origin: location.protocol + '//' + location.hostname + "/"
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });

}
//Youtube playerAPI

function onPlayerReady() {
    time_interval = setInterval(time_display,intervalRate);
    slow_interval = setInterval(slow_interval_fuc,slow_interval_Rate);
    player.setVolume(10)
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        is_play = true;
        time_interval = setInterval(time_display,intervalRate);
        slow_interval = setInterval(slow_interval_fuc,slow_interval_Rate);
    } else if (event.data == YT.PlayerState.PAUSED) {
        is_play = false;
      clearInterval(time_interval);
      clearInterval(slow_interval);
    } else if(event.data == YT.PlayerState.ENDED) {
        Result();
      }
}