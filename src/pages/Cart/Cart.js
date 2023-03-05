import './Cart.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const { cart, clear, removeItem } = useContext(CartContext);
    const navigate = useNavigate();
    return (
      <div>
        {
          cart.map((product) => (
            <div className="cartDetail" key={product.title}>
              <h2>{product.title}</h2>
              <h5>{product.quantity}</h5>
              <button onClick={() => removeItem(product.id)}>x</button>
            </div>
          ))
        }
        {
          cart.length > 0 && <button onClick={clear}>Vaciar Carrito</button>
        }
        {
          cart.length === 0 && <div>
            <h2>No hay produtos en el carrito</h2>
            <button onClick={() => navigate('/')}>Seguir comprando</button>
          </div>
        }
      </div>
      );
};