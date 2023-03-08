import './ItemListContainer.css';
// import Counter from '../../Component/ItemCount/ItemCount';
import ItemList from '../../Component/ItemList/ItemList';
import { useEffect, useState } from 'react';
// import { products } from '../../data/products';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

export default function ItemListContainer(){
  const [productList, setProductList] = useState([]);

  const {categoryId} = useParams();
  // console.log(categoryId);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'products');

    if(categoryId){
      const filteredQuery = query(querySnapshot, where('category', '==', categoryId))
      getDocs(filteredQuery)
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
    } else{
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
    }
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