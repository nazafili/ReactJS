import { useState, useContext } from 'react';
import Counter from '../Counter/Counter';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ data }) => {

  const {addItem} = useContext(CartContext);
  const [dato, setDato] = useState(0);

  const onAdd  = (dato) => {
    console.log('Agregaste: ' + dato + ' tortas a tu carrito')
    setDato(dato);
    addItem(data, dato);
  }

  return (
    <div className='itemcarddetail'>
      
      <img className='itemimagedetail' src={data.image}alt=''  />
      <p className='itemdatadetail'>{data.title}</p>
      <p className='itemdatadetail'>${data.price}</p>
      <p className='itemdatadetail'>{data.description}</p>
      <h2>{dato}</h2>
      <Counter stock={5} onAdd={onAdd}/>
    </div>
  );



}

export default ItemDetail;