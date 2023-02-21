import './ItemDetail.css';
import Counter from '../ItemCount/ItemCount';

export default function ItemDatail({detail}) {
  console.log(detail)
  return (
    <div className='itemDetail'>
      <img alt={detail.name} src={detail.image} />
      <h2>{detail.name}</h2>
      <Counter />
      <button className='addCart'>Agregar al Carrito</button>
    </div>
  )
}