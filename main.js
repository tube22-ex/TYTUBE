sound.init();
clear_sound.init();
miss_sound.init();

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