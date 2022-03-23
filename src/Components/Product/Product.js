import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product, handleCart}) => {
    const {name, img, seller, price, rating} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
                <div className='product-details'>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {rating} starts</p>
                </div>
            </div>
            <button onClick={()=>handleCart(product)} className='cart-btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;