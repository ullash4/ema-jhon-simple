import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const handleAddToCart = (product) =>{
        setCart([...cart, product])
        console.log(cart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product product={product} key={product.id} handleCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
                <h3>Selected Item : {cart.length}</h3>
                <h3>Total Price : $ {}</h3>
                <h3>Total Shopping Charge : $ {}</h3>
                <h3>Tax : $ {}</h3>
                <h3>Grand Total : $ {}</h3>
                <button>Clear Cart</button> <br></br>
                <button>Review Order</button>
            </div>
        </div>
    );
};

export default Shop;