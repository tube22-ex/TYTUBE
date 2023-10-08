function keygraph_func(kana){
    if(line_type_count){
        kana_type_count += line_type_count;
    }
    line_type_count = 0;
    is_finish = false;
    kana = kana.toLowerCase();
    keygraph.build(kana);

    disp();
    //行初期化
    if(!is_keyEvent && !is_build_keyevent){
    document.body.addEventListener("keydown", keyEvent);
    is_build_keyevent = true;
    is_keyEvent = true;
    }
    function keyEvent(e) {
        if(!is_input){
        e.preventDefault();
        }
        if(e.code in Shortcut_key){
            switch (Shortcut_key[e.code]){
                case "Escape":
                    if (is_play) {
                        player.pauseVideo(); // 動画を一時停止
                    } else {
                        player.playVideo(); // 動画を再生
                    }
                    break;
                case "F10":
                    f10count+=1;
                    if(f10count == speedList.length){
                        f10count = 0;
                    }
                    player.setPlaybackRate(speedList[f10count]);
                    play_speed.textContent = `${speedList[f10count]}倍速`
                    break;
                case "F4":
                    is_F4 = true;
                    reset();
                default:
              }
              //ショートカットキー対応
        }else if(is_play){
            if (keygraph.next(e.key)) {
                roma_typed.style.color = type_color;
                kana_lyrics_text_typed.style.color = type_color;
                // 入力がタイピングするキーと一致している場合
                line_type_count = keygraph.seq_done().length;
                sound.play();
                type_count++
                disp();
            }

            // if(!keygraph.next(e.key)){
            //     miss_count ++;
            // }
            //ミス数だけおかしいので後回し

            if (keygraph.is_finished() && !is_finish) {
                roma_typed.style.color = clear_color;
                kana_lyrics_text_typed.style.color = clear_color;
                if(kana_lyrics_text_typed.innerText){
                    clear_sound.play();
                    line_count++
                    line_div.textContent = `${line_count} / ${lyrics_s.length}`
                }
                // すべての文字をタイプし終わったとき
                is_finish = true;
                typing_speed.innerText = typing_speed.innerText;
            }

            while(kana_lyrics_text_typed.textContent.length >= 10){
                kana_lyrics_text_typed.textContent = kana_lyrics_text_typed.textContent.substring(1);
            }
            while(roma_typed.textContent.length >= 16){
                roma_typed.textContent = roma_typed.textContent.substring(1);
            }
            if(e.code == 'Space'){
                if(roma_untyped.innerText == '' && index_next - currentTime > 5 && index){
                    player.seekTo(index_next - 3);
                    //3秒前に飛ばす
                }
                if(keygraph.is_finished()){
                    if(!is_result && is_last && player.getDuration() - currentTime > 3){
                        player.seekTo(player.getDuration() - 3);
                    }else if(index_next - currentTime > 3){
                        player.seekTo(index_next - 3);
                    }
                }

        }
        };
    }
}


