/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css' ;
import Product from '../Product/Product';

const Cart = (props) => {

    const {cart} = props;
    let totalPrice = 0;
    let totalShoping = 0;
    let quantity = 0;
    for (const item of cart) {
        item.quantity = item.quantity || 1;
        totalPrice += item.price * item.quantity;
        totalShoping += item.shipping;
        quantity = quantity + item.quantity;
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