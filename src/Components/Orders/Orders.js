import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ProductItem from "../ProductItem/ProductItem";
import "./Orders.css";

const Orders = () => {
  const [products] = useProducts();

  const [cart, setCart] = useCart(products);

  const handleRemove = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };

  return (
    <div className="shop-container">
      <div className="reivew-container">
        {cart.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
            handleRemove={handleRemove}
          ></ProductItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to={"/shipment"}>
            <button className="btn">Products Shipment</button>
          </Link>{" "}
          <br></br>
          <Link to={"/"}>
            <button className="btn">Go to shop</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
