sound.init();
clear_sound.init();
<<<<<<< HEAD
miss_sound.init();
=======
>>>>>>> ac95a9a49245d7611a6aedad74f7a063b564cf3c

if(localStorage.getItem('name')){
    document.getElementsByName('ranking_show_name')[0].value = localStorage.getItem('name');
}

function input_flg(){
    is_input = true;
}
function input_blur(){
    is_input = false;
}

function calc_score(k){
    score_char = max_score/k;
}

generate_selection();
//譜面選択を生成

show_ranking();
//ランキングを表示

function time_display(){
    currentTime = player.getCurrentTime();
    lyrics_display()
}
  
function slow_interval_fuc(){
    let display_time = Math.floor(currentTime*100)/100
    time.textContent = `${display_time.toFixed(0)} / ${player.getDuration()}`;
    status_fuc();
}