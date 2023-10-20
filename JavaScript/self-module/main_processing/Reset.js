function reset(){
<<<<<<< HEAD
=======
    player.seekTo(0);
>>>>>>> ac95a9a49245d7611a6aedad74f7a063b564cf3c
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
<<<<<<< HEAD
    playData = [];//プレイデータ
    linePlayDataArray = [];
    };
    player.seekTo(0);
=======
    };
>>>>>>> ac95a9a49245d7611a6aedad74f7a063b564cf3c
    clearInterval(time_interval);
    clearInterval(slow_interval);
}