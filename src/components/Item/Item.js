import '../ItemListContainer/itemlist.styles.css'
import Counter from "../Counter/Counter";

const Item = ({id, name, description, price, image, stock}) => {

  const onAdd  = (contador) => {
    console.log('Agregaste: ' + contador + ' tortas a tu carrito')
}

  return (
    <div className='itemcard'>
        <h1>{name}</h1>
        <img className='itemimage' src={image} alt={name}/>
        <p className='itemdata'>Ingredientes principales:    {description}</p>
        <p className='itemdata'>Precio: {price}</p>
        <p className='itemdata'>Cantidad disponible: {stock}</p>
        <Counter stock={5} onAdd={onAdd}/>
    </div>
  )
}

export default Item;  