function reset(){
    player.seekTo(0);
    Result_div.style.display = 'none';
    is_build_keyevent = false;
    is_finish = false;
    is_last = false;
    f = false;
    is_result = false;
    score_div.textContent = 0;
    time.textContent = 0;
    possible_div.textContent = 0;
    nocori_line_div.textContent = 0;
    line_div.textContent = "0 / 0";
    next_lyrics_text.innerHTML = "";
    lyrics_text.innerText = '';
    kana_lyrics_text_typed.innerText = '';
    kana_lyrics_text.innerText = '';
    roma_typed.innerText = '';
    roma_untyped.innerText = '';
    progressBar.value = 0;
    score = 0;
    score_char = 0;
    kana_type_count = 0;
    line_type_count = 0;
    miss_count = 0;
    type_count = 0;
    line_count = 0;
    kana_type_count = 0;
    line_type_count = 0;
    index = 0;
    index_pre = 0;
    index_next = 0;
    currentTime = 0;
    if(!is_F4){
    kana_length = 0;

    time_int = [];//timetag
    display_lyrics = [];//タイムタグだけ除いた歌詞
    kana_display_lyrics = [];
    lyrics_s = [];//加工済み歌詞
    };
    clearInterval(time_interval);
    clearInterval(slow_interval);
}