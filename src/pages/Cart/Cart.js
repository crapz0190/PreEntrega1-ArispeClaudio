import './Cart.css'
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import ItemCart from './ItemCart';

export default function Cart() {
  const { cart, clear, removeItem, total } = useContext(CartContext);
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
  });

  const createOrder = (event) => {
    event.preventDefault();
    const db = getFirestore();
    const querySnapshot= collection(db, 'orders');
    
    addDoc(querySnapshot, {
      buyer: {
        name: formValue.name,
        phone: formValue.phone,
        email: formValue.email,
        location: formValue.location,
      },
      products: cart.map((product) => {
        return {
          title: product.title,
          price: product.price,
          id: product.id,
          quantity: product.quantity,
          images: product.images,
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

  const handleInput = (event) => {
    setFormValue({
      ...formValue, 
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className='bg'>
      <div className='containerCart'>
        {cart.map((product) => (
            <div className="cartDetail" key={product.title}>
              <ItemCart product={product} />          
              <button className='remove' onClick={() => removeItem(product.id)}>x</button>
            </div>
          ))}
        {cart.length > 0 && 
          (<div className='btnNav'>
            {cart.length > 0 && <button onClick={clear}>Eliminar</button>}
            <button onClick={() => navigate('/')}>Más productos del vendedor</button>
          </div>)}
          <span className='pay'>Total a pagar: $ {total}</span>
        {cart.length === 0 && <h2>No hay produtos en el carrito</h2>}
      </div>
      <div className='form'>
        <h3>Completa el formulario con tus datos para finalizar la compra</h3>
        <form className='fmFlex'>
          <fieldset className='itemFlex'>
            <label for='name'>Nombre y Apellido</label>
            <input name='name' value={formValue.name} id='name' type='text' placeholder='ej: Alejandro Torres' onChange={handleInput} />
            <label for='email'>Email</label>
            <input name='email' value={formValue.email} id='email' type='email' placeholder='ej: test@gmail.com' onChange={handleInput} />
          </fieldset>
          <fieldset className='itemFlex'>
            <label for='phone'>Telefono</label>
            <input name='phone' value={formValue.phone} id='phone' type='text' placeholder='1134094523' onChange={handleInput} />
            <label for='location'>Domicilio</label>
            <input name='location' value={formValue.location} id='location' type='text' placeholder='ej: Av. Julio Roca 1600' onChange={handleInput} />
          </fieldset>
        </form>
          <button onClick={createOrder}>Completar compra</button>
      </div>
    </div>
  );
};