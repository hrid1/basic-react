/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {

    
    const  {name, seller, price, ratings , img } = props.product;

    // eslint-disable-next-line react/prop-types
    const handleAddToCart = props.handleAddToCart;
    

    return (
        <div className='product'>
            <img src={img} alt="img not found" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                <p>Manufacture: {seller}</p>
                <p>Ratting: {ratings} Stars</p>
            </div>

            <button onClick={() => {handleAddToCart(props.product)}} className='btn-cart'>
                Add to Cart 
                <FontAwesomeIcon icon={faShoppingCart} />

            
            </button>

            
            
        </div>
        
    );
};

export default Product;