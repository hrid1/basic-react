/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {

    // const [country, setCountries] = useState([]);

    const [countries, setCountries] = useState([]);

    useEffect(() => {

        fetch('./products.json')
        .then(res => res.json())
        .then(data => setCountries(data))

    } , [])
    


    return (
        <section className='shop-section'>

            <div className='product-container'>
                {/* <h2>Prducts: {country.length}</h2> */}
                {
                    countries.map(country => <Product key={country.id} 
                    country={country}> </Product>)
                }
            </div>

            <div className='cart-container'>
                <h2>Order Summary</h2>
            </div>
            
        </section>
    );
};

export default Shop;