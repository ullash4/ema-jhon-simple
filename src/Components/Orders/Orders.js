import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ProductItem from '../ProductItem/ProductItem';
import './Orders.css'

const Orders = () => {

    const [products, setProducts] = useProducts()

    const [cart, setCart] = useCart(products);

    const handleRemove = (product)=>{
        const rest = cart.filter(pd=> pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='reivew-container'>
                {
                    cart.map(product=><ProductItem key={product.id} product={product} handleRemove={handleRemove}></ProductItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                <Link to={'/inventory'}><button className='btn'>Go to Intory</button></Link> <br></br>
                <Link to={'/'}><button className='btn'>Go to shop
                </button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders; 