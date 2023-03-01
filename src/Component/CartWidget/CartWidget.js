import './CartWidget.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {
  const {cart} = useContext(CartContext);
  const [total, setTotal] = useState(0);
  console.log(cart);

  useEffect(() => {
    setTotal(cart.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0))
  }, [cart])

  return(
    <Link to={'/cart'}>
      <div className='cartWidget'>
        <img src='/images/carrito.png' alt='12' />{total}
      </div>
    </Link>
  )
};