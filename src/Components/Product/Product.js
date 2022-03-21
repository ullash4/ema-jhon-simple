import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, rating} = props.product
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
            <button className='cart-btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;