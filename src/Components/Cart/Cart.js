import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>Order Summary</h1>
                <h3>Selected Item : {cart.length}</h3>
                <h3>Total Price : $ {}</h3>
                <h3>Total Shopping Charge : $ {}</h3>
                <h3>Tax : $ {}</h3>
                <h3>Grand Total : $ {}</h3>
                <button>Clear Cart</button> <br></br>
                <button>Review Order</button>
        </div>
    );
};

export default Cart;