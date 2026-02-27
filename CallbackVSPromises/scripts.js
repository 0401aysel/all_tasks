function orderCoffee(amount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(amount > 5){
                reject("Bağışlayın, eyni anda maksimum 5 qəhvə hazırlaya bilərik.");
            }else if(amount == 0){
                reject("Zəhmət olmasa miqdar qeyd edin.");
            }else{
                resolve(`${amount} ədəd qəhvəniz hazırdır!`);
            }
        },3000);
    });
}

orderCoffee(8).then((resolve)=>console.log(resolve)).catch((reject)=>console.log(reject));


function orderNewCoffee(amount, callback){
    return new Promise(()=>{
        setTimeout(()=>{
            if(amount > 5){
                callback('bagislayin',null);
            }else if(amount == 0){
                callback('sorry',null);
            }else{
                callback(null,'qehveniz hazirdir');
            }
        },3000);
    });
}

orderNewCoffee(3,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});

function sifarisVer(yemek, callback) {
    console.log(`${yemek} sifariş qəbul edildi...`);
    setTimeout(() => {
        callback(yemek);
    }, 2000
)};

function hazirla(yemek, callback) {
    console.log(`${yemek} hazırlanır...`);
    setTimeout(() => {
        callback(`${yemek} hazırdır!`);
    }, 3000
)};


sifarisVer('Makaron',yemek=>{
    hazirla(yemek,netice=>console.log(netice))
});

function newOrder(yemek){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Salam musteri! ${yemek} sifariş qəbul edildi...`);
            if(yemek.length < 6){
                resolve(yemek);
            }else{
                reject(`Bu ${yemek} hazirlana bilmir`);
            }
        },3000);
    });
}

function newLunch(yemek){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Sagol musteri!, ${yemek} hazırlanır...`);
            resolve(`${yemek} hazırdır!`);
        },2000);
    }
    );
}

newOrder('LovelyNuggets')
.then(res=>{
        console.log(res);
        return newLunch(res);
}).then((res)=>{
    console.log(res);
}).catch(err=>console.log(err)).finally(()=> console.log('End'));