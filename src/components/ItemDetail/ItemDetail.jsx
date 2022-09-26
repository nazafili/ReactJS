import { useState, useContext } from 'react';
import Counter from '../Counter/Counter';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';


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
      {
        dato > 0 &&
        <Link to='/cart'>
        <button style={{padding: '10px', width: '10rem', marginBottom: '20px', backgroundColor: 'red', fontSize: '20px', color: 'white', border: '3px solid black'}}>Ir al carrito</button>
        </Link>
      }
    </div>


  );
}

export default ItemDetail;