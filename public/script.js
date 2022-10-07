const boom = new Audio('/boom.mp3')

const pingApi = ()=>{
    fetch('/api/ping?' + new URLSearchParams({value: document.getElementById('inputNumber').value}))
    .then(res => res.json())
    .then(data=>{
        document.getElementById('boom').innerHTML = null;
        for(let i = 0; i < data.value; i++){
            document.getElementById('boom').innerHTML += `<img src="https://cdn.discordapp.com/attachments/889457653695266849/1028057410243407892/cat.gif"
            alt="">`
        }
        alert(data.message);
        boom.currentTime = 0
        boom.play();
    })
}