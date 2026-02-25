let txt='Salam MENIM adim AYselDir, hemcinin, sinif yoldasimin adi ayseldir hemcinin qrup yoldasimin adi ayseldir .'

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

