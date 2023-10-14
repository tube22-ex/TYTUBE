let app01;
let app01DB;

(function() {
    const firebaseConfig = {
            apiKey: "AIzaSyCZulPboPP-zrKecvC4OCK6gbTJ_5u7o_8",
            databaseURL: "https://ty-project-58719-default-rtdb.firebaseio.com/",
    };
    const app01 = firebase.initializeApp(firebaseConfig);
    app01DB = app01.database();
})();