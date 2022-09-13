import { useState } from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

const Counter = ({stock , onAdd}) => {

    const [contador, setContador] = useState(1);
    const suma = () => {
        if (contador < stock)
            setContador(contador + 1);
    }
    const resta = () => {
        if (contador > 1)
            setContador(contador - 1);
    }

    return (
        <>
            <div className='divCounter'>
                <div className='divBotones'>
                    <button className='botonesCounter' type='button' onClick={suma}>+</button>
                    <h2>{contador}</h2>
                    <button className='botonesCounter' type='button' onClick={resta}>-</button>
                </div>
                <Link to={'/cart'}>
                <div className='divBoton'>
                    <button className='botonCounter' type='button' onClick={()=>onAdd(contador)}>Agregar al carrito</button>
                </div>
                </Link>
            </div>
        </>
    )
}

export default Counter;

/*    useEffect(() => {
        console.log('Esto lo hago cuando se monte al DOM');
        return () => {
            console.log('me muestro cuando el componente se desmonta')
        }
    }, [])

    useEffect(() => {
        console.log('Esto lo hago cuando cambian las propiedades del DOM');
    }, [contador])

    console.log('Me muestro antes de arrancar el DOM')
*/
