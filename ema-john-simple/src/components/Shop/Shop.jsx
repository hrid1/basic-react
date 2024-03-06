/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    } , [])

    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart)
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
                <h2>Order Summary</h2>
                <p>Total Items: {cart.length}</p>
            </div>
            
        </section>
    );
};

export default Shop;