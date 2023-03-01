import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartWidget() {
  const {cart} = useContext(CartContext);
  console.log(cart);

  return(
    <div className='cartWidget'>
      <img src='/images/carrito.png' alt='12' />{cart?.length}
    </div>
  )
}