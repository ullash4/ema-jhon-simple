import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total=0;
    let shipping = 0;
    let items = 0;
    for(const product of cart){
        const name = product.name
        items = items + product.quantity
        total = total + product.price*product.quantity;
        shipping += product.shipping;
    }
    const tax = (total*0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax)
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
                <h3>Selected Item : {items}</h3>
                <h3>Total Price : $ {total}</h3>
                <h3>Total Shopping Charge : $ {shipping}</h3>
                <h3>Tax : $ {tax}</h3>
                <h3>Grand Total : $ {grandTotal.toFixed(2)}</h3>
                <div className='align'>
                <button className='btn'>Clear Cart</button> <br></br>
                <button className='btn'>Review Order</button>
                </div>
        </div>
    );
};

export default Cart;