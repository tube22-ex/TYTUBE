function status_fuc(){
    if(is_play){
        let x = index_line_count - (kana_type_count + line_type_count);
        let possible = (max_score/kana_length)*(kana_length - x);
        possible_div.textContent = Math.floor(possible);
        let line_noco = kana_display_lyrics.length - (index+1);
        if(line_noco != -1){
            nocori_line_div.textContent = line_noco;
        }   
        score = (max_score/kana_length)*(kana_type_count + line_type_count);

        score_div.textContent = Math.round(score);
        miss_div.textContent = miss_count;
        type_div.textContent = type_count;
        //表示系
        if(!is_finish){
            let s_type = (keygraph.key_done().length / (currentTime - time_int[index - 1])*100)
            if(!isNaN(s_type)){
                let sec_type = (Math.round(s_type)/100).toFixed(2);
                let min_type = (Math.round(s_type * 60 )/100).toFixed(2);
            typing_speed.innerText = `${sec_type}打/秒 - ${min_type}打/分`
            }else{
            typing_speed.innerText = `0.00打/秒 - 0.00打/分`
            }
        }
    }
}