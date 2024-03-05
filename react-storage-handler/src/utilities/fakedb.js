// use local storage to manage data

const addToDb = id => {

    let shoppingCart ;

    // get the shoping cart from local strage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
   
    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity+1;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}
/*
 const addToDb = id => {

    const quantity = localStorage.getItem(id);
    console.log(quantity);
    if(quantity){
        console.log('already exists')
        localStorage.setItem(id, parseInt(quantity)+1)
    }

    else {
        console.log('new item')
        localStorage.setItem(id, 1)
    }
   
*/


export {addToDb}