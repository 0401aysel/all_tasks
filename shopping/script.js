let basket = document.querySelector('.basket');
let cart = document.querySelector('.cart');
let close = document.querySelector('.close');
let add_to_basket = document.querySelectorAll('.add');
let basket_count = document.querySelector('.basket-count');
let list = document.querySelector('.cart-items');
let products = {};

basket.addEventListener('click',()=>{
    cart.classList.toggle('show');
});

close.addEventListener('click',()=>{
    cart.classList.remove('show');
});

add_to_basket.forEach(added => {
    added.addEventListener('click',(event)=>{
        handleAddToCart(event);
    });
});

function handleRemove(id){
    
    delete products[id];

    listBasketElements();
}

function handleAddToCart(event){
    let product = event.target.parentElement;
    let id = product.getAttribute('data-id');
    let price = product.querySelector('.price').innerHTML;
    let img = product.querySelector('img').getAttribute('src'); 
    let title = product.querySelector('.product-title').innerHTML;

    if(!Object.keys(products).includes(id)){
        products[id]={
            title: title,
            img:img,
            count:1,
            price:price,
        }
    }
    handleBasketCount();
    listBasketElements();
}

function handleBasketCount(){
    let product_count = Object.keys(products).length;

    basket_count.innerHTML = product_count;

    if(product_count > 0){
        basket_count.style.display='inline';
    }else{
        basket_count.style.display='none';    
    }
}

function listBasketElements(){
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

    let removeFromBasket = document.querySelectorAll('.remove');
    let increement = document.querySelectorAll('.increement');
    let decreement = document.querySelectorAll('.decreement');

    removeFromBasket.forEach(removed=>{
        removed.addEventListener('click',(event)=>{
            handleRemove(event.target.parentElement.getAttribute('data-id'));
            handleBasketCount();
        });
    });

    increement.forEach(item =>{
        item.addEventListener('click',(event)=>{
            handleIncreement(event.target.closest('.added-item').getAttribute('data-id'));
        });
    });

    decreement.forEach(item =>{
        item.addEventListener('click',(event)=>{
            handleDecreement(event.target.closest('.added-item').getAttribute('data-id'));
            handleBasketCount();
        });
    });
} 

function handleIncreement(id){
    products[id].count +=1;
    listBasketElements();
}
function handleDecreement(id){
    if(products[id].count == 1){
        delete products[id];
    }else{
        products[id].count -=1;
    }
    
    listBasketElements();
}

