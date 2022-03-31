import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProductItem.css";

const ProductItem = ({ product,handleRemove }) => {
  const { name, img, price, quantity, shipping } = product;
  return (
    <div className="product-item">
      <div className="review-product-container">
      <img width={91} src={img} alt="" />
        <div className="review-product-details">
          <p title={name}>Name: {name.length>20?name.slice(0,20)+'...':name}</p>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
          <p>Shipping: ${shipping}</p>
        </div>
      </div>
        <div className="review-delete">
          <button onClick={()=>handleRemove(product)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
        </div>
    </div>
  );
};

export default ProductItem;
