const addProduct = () => {
    const product = getProduct('ProductName');
    const quantity = getProduct('ProductQuantity');
    localStorage.setItem(product, quantity);
}

const getProduct = (id) => {
    const productName = document.getElementById(id);
    const product = productName.value;
    productName.value = '';
    return product;
}

