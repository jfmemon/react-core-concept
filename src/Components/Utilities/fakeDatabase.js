const fakeDb = id => {
    let shoppingCart = {};

    // get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity) {
        shoppingCart[id] = quantity + 1;
    }else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    debugger;
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

export {fakeDb, removeFromDb};


























// const fakeDb = id => {
//     let shoppingCart = {};
//     // add quantity
//     const quantity = shoppingCart[id];
//     console.log(quantity);
//     if(quantity){
//         const newQuantity= parseInt(quantity) + 1;
//         shoppingCart[id] = newQuantity;
//         // localStorage.setItem(id, newQuantity);
//     }else{
//         shoppingCart[id] = 1;
//       // localStorage.setItem(id, 1);
//     }
//     localStorage.setItem('Shopping-cart', JSON.stringify(shoppingCart));
// }

// export {fakeDb};



// const quantity = localStorage.getItem(id);  // get value from local storage by id as a key