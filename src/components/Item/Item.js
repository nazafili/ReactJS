import '../ItemListContainer/itemlist.styles.css'
import Counter from "../Counter/Counter";
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, image, stock }) => {

  const onAdd = (contador) => {
    console.log('Agregaste: ' + contador + ' tortas a tu carrito')
  }

  // Aca se crea el div de cada producto por separado

  return (
    <div className='itemcard'>
      <h1>{name}</h1>
      <img className='itemimage' src={image} alt={name} />
      <p className='itemdata'>Precio: ${price}</p>
      <p className='itemdata'>Cantidad disponible: {stock}</p>
      <Link to={`/item/${id}`}>
        <button className='btn-detalle'>ver detalle</button>
      </Link>
      <Counter stock={5} onAdd={onAdd} />
    </div>
  )
}

export default Item;  