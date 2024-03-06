/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    } , [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        // step:1 get id
        for (const id in storedCart){
       
        // step:2 get the product by using id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){

            // step:3 get quantity of the product
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // step:4 add the added product in the save cart
            saveCart.push(addedProduct);
            
        }
        console.log('added product', addedProduct); 
        // step:5 set the cart
        setCart(saveCart);

        }

    }, [products])

    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart)
        // store data in db
        addToDb(product.id)
    }
    
    


    return (
        <section className='shop-section'>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product.id} 
                    product={product} handleAddToCart={handleAddToCart}> </Product>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}> this is cart</Cart>
            </div>
            
        </section>
    );
};

export default Shop;