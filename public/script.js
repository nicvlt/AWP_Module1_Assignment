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
    var name = document.getElementById('name_cat').value
    console.log(name)

    if(name == ""){
        fetch('/cats/')
        .then(data => data.json())
        .then(data => alert(JSON.stringify(data)))
    }else{
        fetch('/cats/' + name)
        .then(data => data.json())
        .then(data => alert(JSON.stringify(data)))
    }
}

const getCreation = () => {
    var name_cat = document.getElementById('name_cat').value;
    var age_cat = document.getElementById('age_cat').value;
    var gender_cat = document.getElementById('gender_cat').value;

    fetch('/cats', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({name_cat, age_cat, gender_cat})
    })
    .then(res => console.log(JSON.stringify(res)))

    fetch('/cats/' + name_cat)
        .then(data => data.json())
        .then(data => alert(JSON.stringify(data)))
    
}

const getDelete = () => {
    var name = document.getElementById('name_cat').value;
    fetch('/cats/' + name, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(res => {
        var success
        if(res == 1)
            success = true;
        else{
            success = false
        }
        alert(JSON.stringify({success}))
    });
}

const getUpdate =() => {
    var name_cat = document.getElementById('name_cat').value;
    var age_cat = document.getElementById('age_cat').value;
    var gender_cat = document.getElementById('gender_cat').value;

    fetch('/cats/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name_cat, age_cat, gender_cat})
    })
    .then(res => res.json())
    .then(res =>{
        var success
        if(res == 1)
            success = true;
        else{
            success = false
        }
        alert(JSON.stringify({success}))
    });
}
