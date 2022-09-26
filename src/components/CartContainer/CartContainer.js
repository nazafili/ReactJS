import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const CartContainer = () => {
    const { productCartList, removeItem, clear, isInCart, getTotalPrice } = useContext(CartContext);
    console.log(productCartList)
    return (
        <div> {
            productCartList.length > 0 ?
                <div>
                    {productCartList.map(item => (
                        <div style={{ border: '1px solid black', margin: '2rem auto', width: '150px' }}>
                            <p>{item.title}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio unitario: {item.price}</p>
                            <p>Precio productos: {item.quantityPrice}</p>
                            <button onClick={() => removeItem(item.id)}>eliminar producto</button>
                        </div>
                    ))}

                    <p style={{fontSize: '25px'}}>Precio total: {getTotalPrice()}</p>
                    <div>
                        <button style={{ color: 'black', border: '3px solid black', padding: '4px', background: 'red', fontWeight: 'bold', fontSize: '18px' }} onClick={clear}>Vaciar carrito</button>
                    </div>
                    <div>
                        <button style={{ color: 'black', margin: '10px', border: '3px solid black', padding: '4px', background: 'green', fontWeight: 'bold', fontSize: '20px' }} >Terminar compra</button>
                    </div>
                </div>
                :
                <>
                    <p>Agrega productos al carrito</p>
                    <Link style={{ color: 'black', border: '3px solid black', padding: '4px', background: 'purple' }} to="/">volver al inicio</Link>
                </>
        }

        </div>
    )
}
export default CartContainer