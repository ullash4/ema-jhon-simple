import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import ProductItem from '../ProductItem/ProductItem';

const Orders = () => {

    const [products, setProducts] = useProducts()

    const [cart, setCart] = useCart(products);

    return (
        <div className='shop-container'>
            <div className='reivew-container'>
                {
                    cart.map(product=><ProductItem key={product.id} product={product}></ProductItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders; 