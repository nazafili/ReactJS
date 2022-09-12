import { useState, useEffect } from 'react'
import data from './mock-data'
import ItemList from '../ItemList/ItemList'
import Titulos from '../Titulos';

const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([]);

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getData.then((result) => {
      setItems(result);
      console.log(result);
    })
  }, []);


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