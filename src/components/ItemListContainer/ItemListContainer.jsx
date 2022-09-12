import { useState, useEffect } from 'react'
import data from './mock-data'
import ItemList from '../ItemList/ItemList'
import Titulos from '../Titulos';
import {useParams} from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const {categoryId} = useParams();
  console.log('categoryId', categoryId);

  const [items, setItems] = useState([]);

  const getData = new Promise((resolve, reject) => {
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