function status_fuc(){
    if(is_play){
<<<<<<< HEAD
        const X = index_line_count - (kana_type_count + line_type_count);
        const POSSIBLE = (max_score/kana_length)*(kana_length - X);
        possible_div.textContent = Math.floor(POSSIBLE);
        const LINE_NOKORI = kana_display_lyrics.length - (index+1);
        if(LINE_NOKORI != -1){
            nocori_line_div.textContent = LINE_NOKORI;
=======
        let x = index_line_count - (kana_type_count + line_type_count);
        let possible = (max_score/kana_length)*(kana_length - x);
        possible_div.textContent = Math.floor(possible);
        let line_noco = kana_display_lyrics.length - (index+1);
        if(line_noco != -1){
            nocori_line_div.textContent = line_noco;
>>>>>>> ac95a9a49245d7611a6aedad74f7a063b564cf3c
        }   
        score = (max_score/kana_length)*(kana_type_count + line_type_count);

        score_div.textContent = Math.round(score);
        miss_div.textContent = miss_count;
        type_div.textContent = type_count;
        //表示系
        if(!is_finish){
<<<<<<< HEAD
            const S_TYPE = (keygraph.key_done().length / (currentTime - time_int[index - 1])*100)
            if(!isNaN(S_TYPE)){
                const SEC_TYPE = (Math.round(S_TYPE)/100).toFixed(2);
                const MIN_TYPE = (Math.round(S_TYPE * 60 )/100).toFixed(2);
            typing_speed.innerText = `${SEC_TYPE}打/秒 - ${MIN_TYPE}打/分`
=======
            let s_type = (keygraph.key_done().length / (currentTime - time_int[index - 1])*100)
            if(!isNaN(s_type)){
                let sec_type = (Math.round(s_type)/100).toFixed(2);
                let min_type = (Math.round(s_type * 60 )/100).toFixed(2);
            typing_speed.innerText = `${sec_type}打/秒 - ${min_type}打/分`
>>>>>>> ac95a9a49245d7611a6aedad74f7a063b564cf3c
            }else{
            typing_speed.innerText = `0.00打/秒 - 0.00打/分`
            }
        }
    }
}