function lyrics(lrc){
    kana_time_int = [];//timetag
    kana_display_lyrics = [];//タイムタグだけ除いた歌詞
    lyrics_array = lrc.split("\n")
    let is_TY = false
    for (i of lyrics_array){
        if(i == ''){
            continue;
        }
        if(i.startsWith("@Ruby") || i.startsWith("@TimeRatio")){
            break;
        }
        i = i.replace(/[\ufeff\r]/g,"");
        const time_tags = i.match(/\[\d{2}:\d{2}:\d{2}\]/g);
        if (time_tags) { // null チェック
            for(let time_tag of time_tags){
                time_int.push(time_tag.slice(1,-1));
            }
        }
        let TY_time_tags = i.match(/\[\d{2}:\d{2}\.\d{2}\]/g);
        if (TY_time_tags) { // null チェック
            for(let time_tag of TY_time_tags){
                const time_str = time_tag.slice(1,-1);
                const parts = time_str.split(/[:.]/); 
                const results = parts.map(part => parseFloat(part)); 
                const time_res = (results[0]*60) + results[1] + (results[2]*0.01)
                time_int.push(time_res)
            }
            is_TY = true;
        }
        let match_text = '';
        if(is_TY){
            match_text = /\[\d{2}:\d{2}\.\d{2}\]/g;
            
        }else{
            match_text = /\[\d{2}:\d{2}:\d{2}\]/g;
        }
        let lyrics_text = i.replace(match_text,"");
        display_lyrics.push(lyrics_text);
        lyrics_text = lyrics_text.replace(/['’‘]/g,"");
        lyrics_text = lyrics_text.replace(/&.*?;/g ,"");
        lyrics_text = lyrics_text.replace(/<rt>.*?<\/rt>/g,"");
        lyrics_text = lyrics_text.replace(/(<([^>]+)>)/gi, '');
        lyrics_text = lyrics_text.replace(/[^\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFFa-zA-Z\d\s]/g," ");
        lyrics_text = lyrics_text.replace(/['’‘]/g);
        lyrics_text = lyrics_text.replace(/[・]/g,"");
        lyrics_s.push(lyrics_text);
    };
};
//元の文

function kana_lyrics(kana_lrc){
    kana_display_lyrics = [];//タイムタグだけ除いた歌詞
    kana_lyrics_array = kana_lrc.split("\n")
    let kana_is_TY = false
    for (i of kana_lyrics_array){
        if(i == ''){
            continue
        }
        if(i.startsWith("@Ruby") || i.startsWith("@TimeRatio")){
            break
        }
        i = i.replace(/[\ufeff\r]/g,"");
        const time_tags = i.match(/\[\d{2}:\d{2}\.\d{2}\]/g);
        if (time_tags) { // TY チェック
            kana_is_TY = true
        }
        let match_text = '';
        if(kana_is_TY){
            match_text = /\[\d{2}:\d{2}\.\d{2}\]/g
        }else{
            match_text = /\[\d{2}:\d{2}:\d{2}\]/g
        }
        kana_display_lyrics.push(i.replace(match_text,""))
    }
    let kana_len_count = 0;
    kana_display_lyrics.forEach((k)=>{
        kana_len_count += k.length;
    })
    kana_length = kana_len_count;
    calc_score(kana_len_count)
}
//かな歌詞