const addProduct = () => {
    const product = getProduct('ProductName');
    const quantity = getProduct('ProductQuantity');
    showProduct(product, quantity);
    saveProductToLS(product, quantity);
}

const getProduct = (id) => {
    const productName = document.getElementById(id);
    const product = productName.value;
    productName.value = '';
    return product;
}

const showProduct = (product, quantity) => {
    const ul = document.getElementById('product-list');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    ul.appendChild(li);
}

const getShoppingCartLS = () => {
    const shoppingCart = localStorage.getItem('cart');
    let cart = {};
    if(shoppingCart){
        cart = JSON.parse(shoppingCart);
    }
    return cart;
}

const saveProductToLS = (product, quantity) => {
    const cart = getShoppingCartLS();
    cart[product] = quantity;
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied);
}

const displayProductFromLS = () => {
    const savedCart = getShoppingCartLS();
    console.log(savedCart);
    for (const product in savedCart) {
        const quantity = savedCart[product];
        console.log(product , quantity);
        showProduct(product, quantity);
    }

}
displayProductFromLS();