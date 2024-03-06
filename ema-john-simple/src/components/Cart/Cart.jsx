/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css' ;

const Cart = (props) => {

    const {cart} = props;
    let totalPrice = 0;
    let totalShoping = 0;
    for (const item of cart) {
        totalPrice += item.price;
        totalShoping += item.shipping;
    }
    const vatTax = totalPrice*5/100;
    const grandTotal = totalPrice + totalShoping + vatTax;


    // console.log(cart);
    return (
        <div className='orderDetail'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shiping: ${totalShoping}</p>
            <p>Vat & Tax: ${vatTax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            
        </div>
    );
};

export default Cart;