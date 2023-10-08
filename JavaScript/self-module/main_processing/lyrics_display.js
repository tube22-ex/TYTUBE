function lyrics_display(){
    if(currentTime <= index_pre){
        index = 0
        keygraph.build('');
        disp();
        //行初期化
    }
    if(currentTime >= time_int[index]){
        lyrics_text.innerHTML = display_lyrics[index]
        //kana_lyrics_text.innerHTML = kana_display_lyrics[index]
        keygraph_func(kana_display_lyrics[index])
        index_pre = time_int[index]
        index++
        index_next = time_int[index]
        if(display_lyrics[index]){
        next_lyrics_text.innerHTML = "next " + kana_display_lyrics[index];
        }else{
            next_lyrics_text.innerHTML = ""
        }
    }
    if(index == 0 && kana_display_lyrics[0] !== 'undefined'){
        if(display_lyrics[index]){
            next_lyrics_text.innerHTML = "next " + kana_display_lyrics[0];
            }else{
                next_lyrics_text.innerHTML = ""
            }
        document.onkeydown = function(e){
            if(!is_input){
            e.preventDefault();
            }
            if(e.code === 'Space' && index == 0 && kana_display_lyrics[0] !== 'undefined' && time_int[0] - currentTime > 3){
                player.seekTo(time_int[0] - 3);
            }
        }
    }
    
    progress()
}