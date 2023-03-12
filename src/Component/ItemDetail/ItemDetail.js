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
      
      <div className="flexContainer1">
        <ul className="thum">
          <li><img alt={detail.title} src={`/images/${detail.images}`} /></li>
          <li><img alt={detail.title} src={`/images/${detail.images}`} /></li>
          <li><img alt={detail.title} src={`/images/${detail.images}`} /></li>
          <li><img alt={detail.title} src={`/images/${detail.images}`} /></li>
          <li><img alt={detail.title} src={`/images/${detail.images}`} /></li>
          <li><img alt={detail.title} src={`/images/${detail.images}`} /></li>
        </ul>
        <div className="imgBox">
          <img alt={detail.title} src={`/images/${detail.images}`} />
        </div>
      </div>
      <div className='flexContainer2'>
        <div className='productDetail'>
          <h2>{detail.title}</h2>
          <p>{detail.description}</p>
          <h3>{detail.price}</h3>
        </div>
        <div className='cartButtons'>
          <Counter counter={counter} setCounter={setCounter} />
          <button className='addCart' onClick={() => navigate('/')} variant='primary' >Seguir Comprando</button>
          <button className='addCart' disabled={counter > detail.stock} onClick={() => addItem(detail, counter)} variant='primary' >Agregar Al Carrito</button>
          <button className='addCart' onClick={() => navigate('/cart')} variant='primary' >Completar Mi Compra</button>
        </div>
      </div>
    </div>
  )
}