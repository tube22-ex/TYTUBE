const lyrics_text = document.getElementById('lyrics_text'),
     next_lyrics_text = document.getElementById('next_lyrics_text'),
     kana_lyrics_text_typed = document.getElementById('kana_lyrics_text_typed'),
     kana_lyrics_text = document.getElementById('kana_lyrics_text'),
     roma_typed = document.getElementById('roma_typed'),
     roma_untyped = document.getElementById('roma_untyped'),
     key = document.getElementById('key'),
     progressBar = document.getElementById('progressBar'),
     TimeprogressBar = document.getElementById('TimeprogressBar'),
     content = document.getElementById('content'),
     score_div = document.getElementById('score_div'),
     miss_div = document.getElementById('miss_div'),
     type_div = document.getElementById('type_div'),
     line_div = document.getElementById('line_div'),
     nocori_line_div = document.getElementById('nocori_line_div'),
     possible_div = document.getElementById('possible_div'),
     play_speed = document.getElementById('play_speed'),
     lrc_select = document.getElementById('lrc_select'),
     typing_speed = document.getElementById('typing_speed'),
     Result_div = document.getElementById('Result_div'),
     time = document.getElementById('time');


const disp = ()=>{
     // これからタイプしなければいけないキーの取得
     roma_untyped.innerText = keygraph.key_candidate();
     
     // タイプし終わったキーの取得
     roma_typed.innerText = keygraph.key_done();
     
     // これから打つ ひらがな の取得
     kana_lyrics_text.innerText = keygraph.seq_candidates();
     
     // 打ち終わった ひらがな の取得
     kana_lyrics_text_typed.innerText = keygraph.seq_done();
     }
      