import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  
  const [cart, setCart] = useState([]);
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(10)
  const [products, setProducts] = useState([])

    useEffect(()=>{
      const url = `http://localhost:5000/product?page=${page}&size=${size}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[page, size]);


  useEffect(() => {
    const loadCart = getStoredCart();
    const savedCart = [];
    for (const id in loadCart) {
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = loadCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  useEffect(()=>{
    fetch('http://localhost:5000/productcount')
    .then(res=>res.json())
    .then(data=>{
      const count = data.count;
      const pages = Math.ceil(count/10)
      setPageCount(pages)
    })
  },[]);

 

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  return (
    <div className="shop-container">
      <div>
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product._id}
            handleCart={handleAddToCart}
          ></Product>
        ))}
        </div>
        <div className="pagination">
          {
            [...Array(pageCount).keys()].map(number=> <button
               className={`btn ${page === number && "selected"}`} 
               onClick={()=>setPage(number)}>{number+1}</button> )
          }
          <select className="btn" onClick={(e)=>setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to={"/orders"}>
            <button className="btn">Review Order</button>
          </Link>{" "}
          <br></br>
          <button className="btn">Clear Cart</button>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
