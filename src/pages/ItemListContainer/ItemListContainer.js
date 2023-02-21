import './ItemListContainer.css';
// import Counter from '../../Component/ItemCount/ItemCount';
import ItemList from '../../Component/ItemList/ItemList';
import { useEffect, useState } from 'react';
import { products } from '../../data/products';
import { useParams } from 'react-router-dom';

export default function ItemListContainer(){
  const [productList, setProductList] = useState([]);

  const {categoryId} = useParams();
  console.log(categoryId);

  const getProducts = new Promise((resolve, reject) => {
    if(categoryId) {
      const filteredProducts = products.filter((item) => item.category === categoryId);
      setTimeout(() => {
        resolve(filteredProducts);
      }, 1000);
    } else {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    }
  });

  useEffect(() => {
    getProducts
      .then((response) => {
        setProductList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div className='itemListContainer'>
      <ItemList productList={productList} />
    </div>
  )
}