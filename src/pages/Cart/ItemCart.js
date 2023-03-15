import './Cart.css'
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
    <div className='cartDn'>
      <h2>{product.title}</h2>
      <img src={`/images/${product.images}`} />
      <h3>$ {product.price}</h3>
      <h4>{product.quantity}</h4>
      <Counter counter={quantity} setCounter={setQuantity} />
      <span className='subtotal'>$ {product.quantity * product.price}</span>
    </div>
  )
}