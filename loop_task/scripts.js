const department = { 
    manager: 5000, 
    developer: 4500, 
    designer: 3200, 
    intern: 1200, 
    hr: 2800 
};
function upperCase(array){
    for(keys of Object.keys(array)){
        console.log(keys.toUpperCase());
    }
}
let sum = 0;
function totalSalary(array){
    for(let value of Object.values(array)){
        sum +=value;
    }
    return sum;
}

function MinPayment(array){
    let MinPayment = [];
    for(let [key,value] of Object.entries(array)){
        if(value > 3000){
            MinPayment[key]=value;
        }
    }
    return MinPayment;
}
document.getElementById("task1").onclick = function() {
    console.log('UpperCase:Vezife adlari');
    upperCase(department);
    console.log(`totalSalary is :${totalSalary(department)}`);
    console.log(`maaşı 3000-dən yuxarı olan işçilərin siyahısı ("Vəzifə: Maaş" formatında):${MinPayment(department)}`);
    console.log(MinPayment(department));
};

document.getElementById("task2").onclick = function() {
    console.log('test2')
};

document.getElementById("task3").onclick = function() {
    console.log('test3')
};

document.getElementById("task4").onclick = function() {
    console.log('test4')
};
