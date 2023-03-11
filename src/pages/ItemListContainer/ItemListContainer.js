import './ItemListContainer.css';
import ItemList from '../../Component/ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

export default function ItemListContainer(){
  const [productList, setProductList] = useState([]);

  const {categoryId} = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const queryBase = collection(db, 'products');

    const querySnapshot = categoryId 
      ? query(queryBase, where('category', '==', categoryId)) 
      : queryBase;

    getDocs(querySnapshot)
      .then((response) => {
        const list = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setProductList(list);
        console.log(list);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, [categoryId]);

  return (
    <div className='itemListContainer'>
      <ItemList productList={productList} />
    </div>
  )
}