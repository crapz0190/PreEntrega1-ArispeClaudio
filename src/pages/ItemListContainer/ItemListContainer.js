import './ItemListContainer.css';
// import Counter from '../../Component/ItemCount/ItemCount';
import ItemList from '../../Component/ItemList/ItemList';
import { useEffect, useState } from 'react';
// import { products } from '../../data/products';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

export default function ItemListContainer(){
  const [productList, setProductList] = useState([]);

  const {categoryId} = useParams();
  console.log(categoryId);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'products');

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
    // getProducts
    //   .then((response) => {
    //     setProductList(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [categoryId]);

  return (
    <div className='itemListContainer'>
      <ItemList productList={productList} />
    </div>
  )
}