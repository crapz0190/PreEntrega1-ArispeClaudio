import './Cart.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import Counter from '../../Component/ItemCount/ItemCount';
import ItemCart from './ItemCart';

export default function Cart() {
  const { cart, clear, removeItem, total } = useContext(CartContext);
  const navigate = useNavigate();
  // const db = getFirestore();

  const createOrder = (event) => {
    event.preventDefault();
    const db = getFirestore();
    const querySnapshot= collection(db, 'orders');
    
    addDoc(querySnapshot, {
      buyer: {
        email: 'email1@test.com',
        name: 'Claudio',
        phone: '1134234567',
      },
      products: cart.map((product) => {
        return {
          title: product.title,
          price: product.price,
          id: product.id,
          quantity: product.quantity,
        }
      }),
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    })
      .then((response) => {
        console.log(response.id)
        alert(`Orden con el id:${response.id} ha sido creado`)
        updateStocks(db);
      })
      .catch((error) => console.log(error))
  };

  const updateStocks = (db) => {
    cart.forEach((product) => {
      const querySnapshot = doc(db,'products', product.id);

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
        .then(() => {
          alert('El stock de los productos ha sido actualizado')
        })
        .catch((error) => console.log(error))
    });
  };

  return (
    <div>
      {cart.map((product) => (
          <div className="cartDetail" key={product.title}>
            <ItemCart product={product} />          
            <button onClick={() => removeItem(product.id)}>x</button>
          </div>
        ))}
      {cart.length > 0 && <button onClick={clear}>Vaciar Carrito</button>}
      {cart.length > 0 && 
        (<div>
          <button onClick={() => navigate('/')}>Seguir comprando</button>
          <button onClick={createOrder}>Completar compra</button>
          <span>El total es: ${total}</span>
        </div>)}
      {cart.length === 0 && <h2>No hay produtos en el carrito</h2>}
    </div>
  );
};