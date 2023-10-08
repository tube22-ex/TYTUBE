function show_ranking(id){
    document.getElementById('ranking').innerHTML = `<ol type="1" id="ranking_ol"></ol>`
    app01DB.ref().child(id).once('value')
    .then(snapshot => {
        if (snapshot.exists()) {
        // パスが存在する場合の処理
        let DBdata = snapshot.val();
        DBdataSelector(DBdata)
        } else {
        // パスが存在しない場合の処理
        console.log(`DB内に${id}のデータがありません。`);
        return
        }
    })
    function DBdataSelector(dbdata){
        let rank_Array = [];
        for(item in dbdata){
            dbdata[item].sort((a, b) => b.score - a.score);
            rank_Array.push(dbdata[item][0]);
        }
        rank_Array.sort((a, b) => b.score - a.score);
        rank_Array.forEach((Array)=>{
            document.getElementById('ranking_ol').insertAdjacentHTML("beforeend",`<li>${Array["score"]}　${Array["NAME"]}</li>`);
        })

        document.querySelectorAll('#ranking_ol > li').forEach((list) => {
            list.addEventListener('click',show_record);
            }
        )
        function show_record(e){
            let li_text = e.target.textContent;
            let li_name = li_text.substring(li_text.indexOf("　") + 1,li_text.length);
            let select_object = dbdata[li_name];
            let window1 = window.open("about:blank", "window_name", "width=800,height=500,scrollbars=yes");
            window1.document.body.insertAdjacentHTML("afterbegin",`<ol id="Record_ol"></ol>`);
            select_object.forEach((s)=>{
                window1.document.getElementById('Record_ol').insertAdjacentHTML("afterbegin",`<li>${s["date"]} クリアライン数: ${s["line_count"]} スコア: ${s["score"]} タイプ数: ${s["type_count"]}</li>`)
            })
        }

    }

}