import './ItemDetail.css';
import Counter from '../ItemCount/ItemCount';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function ItemDatail({detail}) {

  const navigate = useNavigate();

  const {addItem} = useContext(CartContext);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(detail?.stock === 0 ? 0 : 1 )
  }, [detail])

  // const addToCart = (event) => {
  //   event.preventDefault();
  //   console.log({...detail, quantity: counter})
  //    console.log(detail)
  // }


  return (
    <div className='itemDetail'>
      <img alt={detail.title} src={`/images/${detail.images}`} />
      <h2>{detail.title}</h2>
      <h2>{detail.description}</h2>
      <h2>{detail.price}</h2>
      <Counter counter={counter} setCounter={setCounter} />
      <button className='addCart' onClick={() => navigate('/')} variant='primary' >Seguir Comprando</button>
      <button className='addCart' disabled={counter > detail.stock} onClick={() => addItem(detail, counter)} variant='primary' >Agregar Al Carrito</button>
      <button className='addCart' onClick={() => navigate('/cart')} variant='primary' >Completar Mi Compra</button>
    </div>
  )
}