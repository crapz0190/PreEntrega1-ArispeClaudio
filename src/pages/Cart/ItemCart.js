import { useState, useContext, useEffect } from "react";
import Counter from "../../Component/ItemCount/ItemCount"; 
import { CartContext } from "../../context/CartContext";

export default function ItemCart({product}) {
  const {updateItem} = useContext(CartContext);

  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    updateItem(product.id, quantity)
  }, [quantity])

  return (
    <>
      <h2>{product.title}</h2>
      <h2>${product.price}</h2>
      <h5>{product.quantity}</h5>
      <Counter counter={quantity} setCounter={setQuantity} />
    </>
  )
}