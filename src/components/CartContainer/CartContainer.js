import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext"

const CartContainer = () => {
    const {productCartList, removeItem, clear, isInCart} = useContext(CartContext);
    return (
        <div>
            CartContainer
            <div>
                {productCartList.map(item => (
                    <div>
                    <p>{item.title} - {item.quantity}</p>
                    <button onClick={()=>removeItem(item.id)}>eliminar producto</button>
                    </div>
                ))}
                <button onClick={clear}>Vaciar carrito</button>
                <button onClick={()=>isInCart(1)}>Validacion</button>
            </div>
        </div>
    )
}
export default CartContainer