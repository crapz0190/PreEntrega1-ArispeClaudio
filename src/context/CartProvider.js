import { useState } from "react"
import { CartContext } from "./CartContext"

export default function CartProvider ({children}) {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity) => {
    const product = {
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      quantity: quantity,
      category: item.category,
      image: item.image,
      stock: item.stock,
    };
    setCart([...cart, product]);
    console.log(cart);

  };
  return <CartContext.Provider value={{cart, addItem}}>{children}</CartContext.Provider>
};