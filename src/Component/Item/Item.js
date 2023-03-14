import './Item.css'

// eslint-disable-next-line
export default function({product}) {
  return (
    <div className='item'>
      <figure>
        <img alt={product.title} src={`/images/${product.images}`} />
      </figure>
      <div className='displayText'>
        <h2>${product.price}</h2>
        <span>Envío gratis</span>
      </div>
      <div className='textContainer'>
        <h3 className='productTitle'>{product.title}</h3>
        <p className='description'>{product.description}</p>
      </div>
    </div>
  );
}