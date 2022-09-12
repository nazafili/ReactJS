import '../ItemListContainer/itemlist.styles.css'
import Counter from "../Counter/Counter";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Item = ({id, name, price, image, stock}) => {

  const onAdd  = (contador) => {
    console.log('Agregaste: ' + contador + ' tortas a tu carrito')
}

  return (
    <div className='itemcard'>
        <h1>{name}</h1>
        <img className='itemimage' src={image} alt={name}/>
        <p className='itemdata'>Precio: ${price}</p>
        <p className='itemdata'>Cantidad disponible: {stock}</p>
        <button onClick={<ItemDetailContainer/>}>ver detalle</button>
        <Counter stock={5} onAdd={onAdd}/>
    </div>
  )
}

export default Item;  