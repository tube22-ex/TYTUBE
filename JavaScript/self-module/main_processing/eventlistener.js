document.getElementById('playVolume').addEventListener('input',(e)=>{
        player.setVolume(e.target.value);
})

document.getElementById('intervalRate_input').addEventListener('input',(e)=>{
        intervalRate = e.target.value;
})

document.getElementsByName('ranking_show_name')[0].addEventListener('change',(e)=>{
        localStorage.setItem('name',e.target.value);
        alert(`${e.target.value}に設定しました。`)
})