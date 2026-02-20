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


const inventory = { apple: 2.9, banana: 1.8, milk: 3.2, bread: 0.8, coffee: 12.5 };

class changeAmount{
    constructor(array = []){
        this.array = array;
    }
    upAmount(){
        const inflatedInventory = [];
        for(const [key,value] of Object.entries(this.array)){
            inflatedInventory[key] = value*120/100;
        }
        return inflatedInventory;
    }
    expensive(){
        const expensiveItems=[];
        for(const [key,value] of Object.entries(this.array)){
            if(value>3){
                expensiveItems.push(key);
            }
        }
        return expensiveItems;
    }
    sum(){
        let sum =0;
        for(let value of Object.values(this.array)){
            sum +=value;
        }
        return sum;
    }
    message(){
        let length = Object.keys(this.array).length;
        let maxValue = Math.max(...Object.values(this.array));
        let name = '';
        for(const [key,value] of Object.entries(this.array)){
            if(maxValue == value ){
                name = key;
            }
        }
        console.log(`Magazada ${length} nov mehsul var ve en bahali mehsul: ${name} : ${maxValue}`);
    }
}

document.getElementById("task2").onclick = function() {
    newTask2 = new changeAmount(inventory);
    const upAmount = new changeAmount(newTask2.upAmount());
    console.log(`ilkin array :`);
    console.log(inventory);
    console.log(`20% artim ile array :`);
    console.log(upAmount);
    console.log(`3 AZN-den baha olanlar :`);
    console.log(upAmount.expensive());
    console.log(`cem :`);
    upAmount.message();
};

const customer1 = { customerName: "Aysel", price: 100 };

const customer2 = { customerName: "Murad", price: 250 };

const cashier = {
    calculateTotal: function(tax, discount) {
        const total = this.price + (this.price * tax) - discount;
        console.log(`${this.customerName} üçün yekun məbləğ: ${total} AZN); `)
    } 
};

calculateTotal1 = cashier.calculateTotal.bind(customer1,tax = 0.18, discount = 5);
const payForCostumer = cashier.calculateTotal.bind(customer1);
document.getElementById("task3").onclick = function() {
    calculateTotal1();
    cashier.calculateTotal.apply(customer2,[0.18, 20]);
    payForCostumer(0.18,5)
};

function keys(array){
    for( key in array){
        console.log(key.toUpperCase());
    }
}
function sumSalary(array){
    let sum = 0;
    for( key in array){
        sum += array[key];
    }
    return sum;
}
function UpperSalary(array){
    let upSalary = [];
    for( key in array){
        if(array[key] > 3000){
            upSalary[key]=array[key];
        }
    }
    return upSalary;
}
function changestructure(array){
    return Object.entries(array);
}

document.getElementById("task4").onclick = function() {
    console.log(keys(department));
    console.log(sumSalary(department));
    console.log(UpperSalary(department));
    console.log(changestructure(department));
};
