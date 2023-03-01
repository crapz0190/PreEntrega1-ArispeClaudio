import './ItemDetail.css';
import Counter from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function ItemDatail({detail}) {

  const navigate = useNavigate();

  const {addItem} = useContext(CartContext);

  const [counter, setCounter] = useState(0);

  // const addToCart = (event) => {
  //   event.preventDefault();
  //   console.log({...detail, quantity: counter})
  //    console.log(detail)
  // }


  return (
    <div className='itemDetail'>
      <img alt={detail.name} src={detail.image} />
      <h2>{detail.name}</h2>
      <h2>{detail.description}</h2>
      <h2>{detail.price}</h2>
      <Counter counter={counter} setCounter={setCounter} />
      <button className='addCart' onClick={() => navigate('/')} >Seguir Comprando</button>
      <button className='addCart' onClick={() => addItem(detail, counter)} >Agregar Al Carrito</button>
      <button className='addCart' onClick={() => navigate('/cart')} >Completar Mi Compra</button>
    </div>
  )
}