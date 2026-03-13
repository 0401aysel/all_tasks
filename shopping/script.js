let basket = document.querySelector('.basket');
let cart = document.querySelector('.cart');
let close = document.querySelector('.close');
let addToBasket = document.querySelectorAll('.add');
let basketCount = document.querySelector('.basket-count');
let total = document.getElementById('total');
let totalPrice= document.getElementById('total-price');
let list = document.querySelector('.cart-items');

let products = {};

handleListProducts();
handleBasketCount();

basket.addEventListener('click',()=>{
    cart.classList.add('show');
});

close.addEventListener('click',()=>{
    cart.classList.remove('show');
});

addToBasket.forEach(item =>{
    item.addEventListener('click',(e)=>{
        handleAddToCart(e.target.parentElement);
    });
});

function handleGetProducts(){
    let storage = localStorage.getItem('basket');
    return storage ? JSON.parse(storage) : {};
}

function handleSetProducts(products){
    localStorage.setItem('basket',JSON.stringify(products));
}

function handleAddToCart(product){
    products = handleGetProducts();
    let id = product.getAttribute('data-id');
    
    if(products[id]){
        handleIncreement(id);
    }else{
        handleNewProduct(product,id);
    }
    handleListProducts();
}

function handleListProducts(){
    products = handleGetProducts();

    list.innerHTML = '';
    for( let [key , product] of Object.entries(products)){
        list.innerHTML += `
            <div class="added-item" data-id=${key}>
                <img src=${product.img}>
                <p class="added-title">${product.title}</p>
                <p><span>$</span><span class="product-total">${product.price*product.count}</span></p>
                <div class="counter">
                    <button class="increement">+</button>
                    <p class="count">${product.count}</p>
                    <button class="decreement">-</button>
                </div>
                <button class="remove">x</button>
            </div>
        `;
    };

    let increement = document.querySelectorAll('.increement');
    let decreement = document.querySelectorAll('.decreement');
    let removeFromBasket = document.querySelectorAll('.remove');

    increement.forEach(item=>{
        item.addEventListener('click',(e)=>{
            handleIncreement(e.target.closest('.added-item').getAttribute('data-id'));
        })
    });

    decreement.forEach(item=>{
        item.addEventListener('click',(e)=>{
            handleDecreement(e.target.closest('.added-item').getAttribute('data-id'));
        })
    });

    removeFromBasket.forEach(item=>{
        item.addEventListener('click',(e)=>{
            handleRemove(e.target.closest('.added-item').getAttribute('data-id'));
        })
    });
    handleTotal();
}
function handleNewProduct(product,id){

    let img = product.querySelector('img').getAttribute('src');
    let price = product.querySelector('.price').innerText;
    let title = product.querySelector('.product-title').innerText;

    products[id] ={
        title : title ,
        price : price , 
        img : img ,
        count : 1,
    };
    handleSetProducts(products);
    handleBasketCount();
    handleListProducts();
}

function handleIncreement(id){
    products = handleGetProducts();

    products[id].count +=1;
    handleSetProducts(products);
    handleListProducts();
}

function handleDecreement(id){
    products = handleGetProducts();
    if(products[id].count>1){
        products[id].count -=1;
    }else{
        delete products[id];
    }
    handleSetProducts(products);
    handleListProducts();
    handleBasketCount();
}
function handleRemove(id){
    products = handleGetProducts();
    
    delete products[id];

    handleSetProducts(products);
    handleListProducts();
    handleBasketCount();
}

function handleBasketCount(){
    let productCount = Object.keys(handleGetProducts()).length;

    basketCount.innerHTML = productCount;

    if(productCount > 0){
        basketCount.style.display='inline';
    }else{
        basketCount.style.display='none';    
    }
}

function handleTotal(){
    let productCount = Object.keys(handleGetProducts()).length;

    let totalProductPrice = 0;
    
    for(let product of Object.values(handleGetProducts())){
        totalProductPrice+= product.count * product.price;
    };

    total.innerHTML = totalProductPrice;

    if(productCount > 0){
        totalPrice.style.display='inline';
    }else{
        totalPrice.style.display='none';    
    }
}
