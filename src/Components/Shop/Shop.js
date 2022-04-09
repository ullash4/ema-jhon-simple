import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products] = useProducts();
    const [cart, setCart] = useState([]);
    

    useEffect(()=>{
        const loadCart = getStoredCart();
        const savedCart = [];
        for (const id in loadCart) {
            const addedProduct = products.find(product=> product.id === id)
            if(addedProduct){
                const quantity = loadCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])

    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product product={product} key={product.id} handleCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}> 
                <Link to={'/orders'}><button className='btn'>Review Order</button></Link> <br></br>
                <button className='btn'>Clear Cart</button> 
                </Cart>
            </div>
        </div>
    );
};

export default Shop;