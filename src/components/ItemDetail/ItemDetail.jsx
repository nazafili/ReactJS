import Counter from '../Counter/Counter';
import './ItemDetail.css';

const onAdd  = (contador) => {
  console.log('Agregaste: ' + contador + ' tortas a tu carrito')
}

const ItemDetail = ({ data }) => {

  return (
    <div className='itemcard'>
      
      <img className='itemimage' src={data.image}alt=''  />
      <p className='itemdata'>{data.title}</p>
      <p className='itemdata'>${data.price}</p>
      <p className='itemdata'>{data.description}</p>
      <Counter stock={5} onAdd={onAdd}/>
    </div>
  );



}

export default ItemDetail;