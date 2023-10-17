function Result(){
    is_result = true;
    Result_div.style.display = 'block';
    const now = new Date();
    const NOW = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
    app01DB.ref(play_id).once('value').then(snapshot => {
        let name = localStorage.getItem('name')
        if(!name){
            name = "名前未設定"
        }
        let appdata = snapshot.val()
        if(!appdata){
            let data = {};
            data[play_id] = {};
            data[play_id][name] = {};
            data[play_id][name][0] = {
                "score": Math.floor(score),
                "type_count": type_count,
                "line_count": line_count,
                "NAME": name,
                "date": NOW
            };
            app01DB.ref().update(data);
        }else{
            if(appdata[name]){
                let len = Object.keys(appdata[name]).length;
                let data01 = {};
                data01[len] = {
                    "score": Math.floor(score),
                    "type_count": type_count,
                    "line_count": line_count,
                    "NAME": name,
                    "date": NOW
                };
                app01DB.ref(play_id).child(name).update(data01);
            }else{
                let data02 = {};
                data02[name] = {};
                data02[name][0] = {
                    "score": Math.floor(score),
                    "type_count": type_count,
                    "line_count": line_count,
                    "NAME": name,
                    "date": NOW
                };
                app01DB.ref(play_id).update(data02);
            }
            //名前があるかどうか
        }
        //play_idがあるかどうか
    });
}