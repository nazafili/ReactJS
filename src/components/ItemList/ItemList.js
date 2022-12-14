import Item from "../Item/Item";
import '../ItemListContainer/itemlist.styles.css'

const Itemlist = ({ itemsList }) => {

    // Aca creamos un map (el cual busca cada producto) y devuelve el div de ITEM

    return (
        <div className="itemlist">
            {itemsList.map((producto) => {
                return (
                    <Item
                        key={producto.id}
                        id={producto.id}
                        name={producto.name}
                        description={producto.description}
                        price={producto.price}
                        image={producto.image}
                        stock={producto.stock}
                    />
                );
            })}
        </div>
    )
}

export default Itemlist