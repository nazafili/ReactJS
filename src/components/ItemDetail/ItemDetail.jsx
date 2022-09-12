import Counter from '../Counter/Counter';
import './ItemDetail.css';

const onAdd  = (contador) => {
  console.log('Agregaste: ' + contador + ' tortas a tu carrito')
}

const ItemDetail = ({ data }) => {

  return (
    <div className='itemcarddetail'>
      
      <img className='itemimagedetail' src={data.image}alt=''  />
      <p className='itemdatadetail'>{data.title}</p>
      <p className='itemdatadetail'>${data.price}</p>
      <p className='itemdatadetail'>{data.description}</p>
      <Counter stock={5} onAdd={onAdd}/>
    </div>
  );



}

export default ItemDetail;