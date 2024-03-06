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
        console.log(storedCart);
    }, [])

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