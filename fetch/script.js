let api ='https://jsonplaceholder.typicode.com/users';

async function getUsers(){
    console.log("API call")
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
    }
};

datas = getUsers();

datas.then(res=>{
    let users = document.getElementById('users');

    res.forEach(user=>{
        let newChildElement = document.createElement('li');
        
        newChildElement.innerHTML= user.name;
        users.appendChild(newChildElement);

        newChildElement.addEventListener('click',()=>{
            
            const elementsWithClass = document.querySelectorAll('.activeUser');

            elementsWithClass.forEach(element => {
                element.classList.remove('activeUser');
            });
            
            newChildElement.classList.add("activeUser");
            
            let userData = document.getElementById('user-data');
            userData.innerHTML='';

           for(let [key,values] of Object.entries(user) ){

                let innerData = document.createElement('li');

                if(typeof(values) === 'object'){
                    let newValue = `<span class="item-data-key">${key}</span>:`;
                    for(let value of Object.values(values)){
                        if( typeof(value) === 'object'){
                            for(let item of Object.values(value)){
                                newValue +=' ' + item;
                            }
                        }else{
                            newValue +=' ' + value;
                        }                
                        innerData.innerHTML = newValue;
                    }
                }else{
                    innerData.innerHTML = `<span class="item-data-key">${key}</span>: ${values}`;
                }
                userData.appendChild(innerData);
            };
        });
    });
});