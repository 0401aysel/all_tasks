let api ='https://jsonplaceholder.typicode.com/users';
let loading = document.getElementById('loading');
let users = document.getElementById('users');
let userData = document.getElementById('user-data');

async function getUsers(){
    loading.style.display='block';

    try{
        let response = await fetch(api,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
        });

        if(response.ok){
            let users = await response.json();
            return users;
        }else{
            throw new Error ('HTTP Error');
        }
    }catch(error){
        console.log(error);
    }finally{
        loading.style.display='none';
    }
};

async function getUserDataById(id){
    try{

        let response = await fetch(api + `/${id}`);
        let data = await response.json();

        return data;
    }catch(error){
        console.log(error);
    }finally{
        console.log('final');
    }
}

function handleUserData(currentData){
    userData.innerHTML = '';

    for(let [key,value] of Object.entries(currentData)){
        userData.innerHTML +='<br>';
        if(typeof(value) === 'object'){
            userData.innerHTML += `${key}::`;
            for( let [key,newValue] of Object.entries(value)){
                if( typeof(newValue) === 'object'){
                    userData.innerHTML += `~${key}::`;
                    for(let [key,lastValue] of Object.entries(newValue)){
                        userData.innerHTML += `${key}::${lastValue}`;
                    }
                }else{
                    userData.innerHTML += `${key}:${newValue}`;
                }
            }
        }else{
            userData.innerHTML += `${key}:${value}`;
        }
    };
    userData.innerHTML += '<br><br><label for="setData">Yeni Data:</label><input id="setData"></input><button type="submit" id="sendData">Gonder</button>';

    document.getElementById('sendData').addEventListener('click', async ()=>{
        let data = document.getElementById('setData').value;
        try{
            let newData = await fetch(`${api}/${currentData.id}`,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json',
                },
                body:JSON.stringify({...currentData,newData:data})
            });
            let updatedData = await newData.json();
    
            handleUserData(updatedData);
            console.log(updatedData);
        }catch(error){
            console.log(error)
        }
    });
}

datas = getUsers();

datas.then(res=>{
    res.forEach(user=>{
        let newChildElement = document.createElement('li');

        newChildElement.dataset.id=user.id;

        newChildElement.innerHTML= user.name;
        users.appendChild(newChildElement);
    });
});

users.addEventListener('click',async (e)=>{

    let id = e.target.dataset.id;

    let currentData = await getUserDataById(id);
    
    handleUserData(currentData);
});
