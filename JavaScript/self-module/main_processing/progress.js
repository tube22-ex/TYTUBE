function progress(){
    if(is_play){
        TimeprogressBar.value = currentTime/player.getDuration();
        prog = (currentTime - index_pre)/(index_next - index_pre)
        if(index == 0){
            prog = currentTime/time_int[0]
            keygraph.reset()
        }
        
        if(index == time_int.length){
            let = lastprog = (currentTime - index_pre)/(player.getDuration() - index_pre)
            progressBar.value = lastprog
            is_last = true;
        }else{
            progressBar.value = prog
        }
        index_line_count = 0
        for(let i=0;i<index;i++){
            index_line_count += kana_display_lyrics[i].length;
        }
    }
}