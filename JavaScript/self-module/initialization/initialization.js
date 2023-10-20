let is_finish = false;
let f = true;
let is_play = false;
let is_last = false;
let is_build_keyevent = false;
let is_result = false;
let is_F4 = false;
let is_keyEvent = false;
let is_input = false;
//flag

let time_int = [];//timetag
let display_lyrics = [];//タイムタグだけ除いた歌詞
let kana_display_lyrics = [];
let lyrics_s = [];//加工済み歌詞
let playData = [];
let linePlayDataArray = [];
//配列系

const max_score = 200000;
//maxスコア

let index = 0;
let index_pre = 0;
let index_next = 0;
let currentTime = 0;
let play_id = 0;
let index_line_count = 0;
//index系

let score = 0;
let score_char = 0;
let kana_length = 0;
let kana_type_count = 0;
let line_type_count = 0;
//スコア系
let miss_count = 0;
let type_count = 0;
let line_count = 0;
let f10count = 3;
//カウント系

let intervalRate = 5;
let slow_interval_Rate = 100;
//時間