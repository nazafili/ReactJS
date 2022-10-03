import { useState, useEffect } from 'react'
import data from './mock-data'
import ItemList from '../ItemList/ItemList'
import Titulos from '../Titulos';
import { useParams } from 'react-router-dom';
import { db } from "../../../src/utils/firebase"
import { collection, getDocs, where, query} from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  console.log('categoryId', categoryId);

  const [items, setItems] = useState([]);

  /* const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getData.then((result) => {
      if(categoryId){
      const newProducto = result.filter(item=>item.categoria === categoryId);
      setItems(newProducto);
      console.log(result);
    } else {
      setItems(result);
    }
    })
  }, [categoryId]);

  */

  useEffect(() => {
    const queryRef = !categoryId ? collection(db, "items") : query(collection(db, "items"), where("categoria", "==", categoryId));
      getDocs(queryRef).then(response => {
        const resultados = response.docs.map(doc => {
          //     console.log(doc.data())
          //     console.log(doc.id)
          const newItem = {
            id: doc.id,
            ...doc.data(),
          }
          return newItem
        })
        console.log(resultados);
        setItems(resultados)
      })
}, [categoryId]);


 /* useEffect(() => {
    if (categoryId) {
      const queryRef = collection(db, "items");
      getDocs(queryRef).then(response => {
        const resultados = response.docs.map(doc => {
          //     console.log(doc.data())
          //     console.log(doc.id)
          const newItem = {
            id: doc.id,
            ...doc.data(),
          }
          return newItem
        })
        console.log(resultados);
        setItems(resultados)
      })
    } else {
      const queryRef = query(collection(db, "items"), where("categoria", "==", categoryId))
      getDocs(queryRef).then(response => {
        const resultados = response.docs.map(doc => {
          //     console.log(doc.data())
          //     console.log(doc.id)
          const newItem = {
            id: doc.id,
            ...doc.data(),
          }
          return newItem
        })
        console.log(resultados);
        setItems(resultados)
      })
    }
  }, [categoryId]);

  */

  return (

    <>
      <Titulos />
      {
        items.length > 0 ? (
          <ItemList itemsList={items} />
        ) : (
          <div>Cargando...</div>
        )}
    </>
  );
};

export default ItemListContainer;