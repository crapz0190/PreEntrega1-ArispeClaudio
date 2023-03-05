import './Item.css'

export default function({product}) {
  console.log(product.images)
  return (
    <div className='item'>
      <img alt={product.title} src={`/images/${product.images}`} />
      <h2>{product.title}</h2>
      <h2>{product.description}</h2>
      <h2>${product.price}</h2>
    </div>
  );
}