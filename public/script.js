const boom = new Audio('/boom.mp3')

const pingApi = ()=>{
    console.log({value: document.getElementById('inputNumber').value})
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

const executeFunction = () => {
    var functionSwitch = document.getElementById('request').value
    switch(functionSwitch){
        case('creation'):{
            getCreation();
            break;
        }
        case('read'):{
            getRead();
            break;
        }
        case('update'):{
            getUpdate();
            break;
        }
        case('delete'):{
            getDelete();
            break;
        }
    }
}

const getRead = () => {
    var id = document.getElementById('cat_id').value
    if(id == ""){
        fetch('/cats/')
        .then(data => data.json())
        .then(data => alert(JSON.stringify(data)))
    }else{
        fetch('/cats/' + id)
        .then(data => data.json())
        .then(data => alert(JSON.stringify(data)))
    }
}

const getCreation = () => {
    var id = document.getElementById('cat_id').value;
    var name = document.getElementById('name_cat').value;
    var age = document.getElementById('age_cat').value;
    var gender = document.getElementById('gender_cat').value;

    var payload = {
        id_cat: id,
        name_cat: name, 
        age_cat: age, 
        gender_cat: gender
    }

    fetch('/cats/', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)

    })
    .then(res => res.json())
    .then(res => alert(JSON.stringify(res)))
}

const getDelete = () => {
    var id = document.getElementById('cat_id').value;
    fetch('/cats/' + id, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(res => alert(JSON.stringify(res)))
}

const getUpdate =() => {
    var id = document.getElementById('cat_id').value;
    var name = document.getElementById('name_cat').value;
    var age = document.getElementById('age_cat').value;
    var gender = document.getElementById('gender_cat').value;

    var payload = {
        id_cat: id,
        name_cat: name, 
        age_cat: age, 
        gender_cat: gender
    }

    fetch('/cats/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(res => alert(JSON.stringify(res)))
}
