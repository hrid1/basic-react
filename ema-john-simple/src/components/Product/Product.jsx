// import React from 'react';
import './Product.css'

const Product = (props) => {

    // eslint-disable-next-line react/prop-types
    const  {name, seller, price, ratings , img } = props.country;
    

    return (
        <div className='product'>
            <img src={img} alt="img not found" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                <p>Manufacture: {seller}</p>
                <p>Ratting: {ratings} Stars</p>
            </div>

            <button className='btn-cart'>Add to Cart</button>

            
            
        </div>
        
    );
};

export default Product;