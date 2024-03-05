import React from 'react';
import './Cosmetic.css'
import { addToDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {

    const {id, name, price} = props.cosmetic;

    // Event handler addToCart
    const addToCart = (id) => {
        addToDb(id)
    }

    //  Remove data 

   
    return (
        <div className='cosmetics-container'>
            <div className='cosmatic-div' style={{border: '3px solid black', margin:'5px'}} >
                <h3>Id : {id}</h3>
                <h2> {name}</h2>
                <h3>Product Price: {price}</h3>

                <button onClick={() => {addToCart(id)}}>Add To Cart</button>
                <button>Buy Now</button>
            </div>
        </div>

        
    );
};


function ShowProduct (props) {

    const {name, price } = props.cosmetic;

    return(
        <>

        <div style={{}}>
                <h2>Name: {name}</h2>
                <h3>Price: {price}</h3>
            </div>

        </>
    )
}

// export default Cosmetic;
export {
    Cosmetic,
    ShowProduct
}

