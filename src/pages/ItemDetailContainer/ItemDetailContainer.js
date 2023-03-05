import { useParams } from "react-router-dom";
// import { products } from '../../data/products';
import { useEffect, useState } from "react";
import ItemDetail from "../../Component/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function ItemDetailContainer() {
  const {id} = useParams();
  const[detailObject, setDetailObject] = useState({});

  // const getProduct = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     const findProduct = products.find(item => item.id == id);
  //     resolve(findProduct)
  //   }, 1000)
  // });

  const getProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, 'products', id);

    getDoc(querySnapshot)
      .then((response) => {
        setDetailObject({
          id: response.id, ...response.data()
        })
        console.log(response.id)
        console.log(response.data)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    // getProduct
    //   .then((response) => {
    //     setDetailObject(response)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    getProduct();
  }, [])
  return (
    <div>
      <ItemDetail detail={detailObject} />
    </div>
  )
}