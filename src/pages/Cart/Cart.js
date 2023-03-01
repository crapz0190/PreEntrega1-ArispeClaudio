import './Cart.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cart() {
    const { cart, clear, removeItem } = useContext(CartContext);
    return (
      <div>
        {
          cart.map((product) => (
            <div className="cartDetail" key={product.name}>
              <h2>{product.name}</h2>
              <h5>{product.quantity}</h5>
              <button onClick={() => removeItem(product.id)}>x</button>
            </div>
          ))
        }
        {
          cart.length > 0 && <button onClick={clear}>Vaciar Carrito</button>
        }
      </div>
      );
};