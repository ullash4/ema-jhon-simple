import React from 'react';

const ProductItem = ({product}) => {
    const {name, image, price, quantity} = product;
    return (
        <div>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{quantity}</p>
        </div>
    );
};

export default ProductItem;