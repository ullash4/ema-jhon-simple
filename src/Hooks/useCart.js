import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = getStoredCart();
    const savedCart = [];
    for (const id in loadCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = loadCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return [cart, setCart];
};
export default useCart;
