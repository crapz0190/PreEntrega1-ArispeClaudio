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

  return (
    <div className='itemDetail'>
      <div className='elementContainer'>
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
            <button className='addCart plusProd' onClick={() => navigate('/')} variant='primary' >Ver más productos del vendedor</button>
            <span>Nuevo | +2mil vendidos</span>
            <h2>{detail.title}</h2>
            <p>{detail.description}</p>
            <img alt='logoEstrellas' src='/images/estrellas.png' />
            <h3>$ {detail.price}<sup className='topNum'>00</sup></h3>
          </div>
          <div className='cartButtons'>
            <div className='prodStock'>
              <h4>Stock disponible <span>({detail.stock} disponibles)</span></h4>
              <div className='contentEditable'>
                <h5>Cantidad: </h5><Counter counter={counter} setCounter={setCounter} />
              </div>
            </div>
            <button className='addCart' disabled={counter > detail.stock} onClick={() => addItem(detail, counter)} variant='primary' >Agregar al carrito</button>
            <button className='addCart' onClick={() => navigate('/cart')} variant='primary' >Comprar ahora</button>
          </div>
          <div className='flexEditable'>
            <img className='logoProtec' alt='logo-compra-protegida' src='/images/compra-protegida.png'/>
            <h6><span>Compra Protegida</span>, recibí el producto que esperabas o te devolvemos tu dinero.</h6>
          </div>
        </div>
      </div>
    </div>
  )
};