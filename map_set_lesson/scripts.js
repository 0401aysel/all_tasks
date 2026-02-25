//           task 1            //
function cleanText(text){
    let words=text.trim().split(' ');
    
    let arr = new Set();
    for(value of Object.values(words)){
        arr.add(value.toLowerCase());
    }
    let new_sentence = `Unikal sozlerin sayi:${arr.size}` + '<br>' + [...arr].join(' ');
    document.getElementById("result1").innerHTML=new_sentence;
}

document.getElementById("task1").addEventListener("input", function(){
    cleanText(this.value);
});

//           task 2           //
const p1 = {name: "Laptop",price: 1500};
const p2 = {name: "Notebook",price: 3500};
const p3 = {name: "Maus",price: 150};

let productPrices = new Map();
productPrices.set(p1.name,p1.price);
productPrices.set(p2.name,p2.price);
productPrices.set(p3.name,p3.price);

function updatePrice(productObj, newPrice){
    productPrices.set(productObj,newPrice);
    return productPrices;
}

console.log(updatePrice('Laptop',900));



//           task 3            //
const classA = ["Ali", "Aysel", "Murad", "Ali", "Aysel", "Murad","Shelale"];
const classB = ["Murad", "Leyla", "Ali", "Shelale", "Shelale"];

let newA = new Set(classA);
let newB = new Set(classB);

let commonStudents = new Set();

for(value of newA.values()){
    if( newB.has(value) ){
       commonStudents.add(value); 
    }
}

console.log(commonStudents);


// task3 - with filter  // 

let newClass = classB.filter( student => newA.has(student));

let students = new Set(newClass);
console.log(students);