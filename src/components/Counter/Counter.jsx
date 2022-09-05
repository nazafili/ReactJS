import { useEffect, useState } from 'react';
import './styles.css';

const Counter = ({ stock}) => {

    const [contador, setContador] = useState(1);
    const suma = () => {
        if (contador < stock)
            setContador(contador + 1);
    }
    const resta = () => {
        if (contador > 1)
            setContador(contador - 1);
    }


useEffect(() => {
    console.log('Total: ' + contador);
}, [contador]);

    return (
        <>
            <div className='divCounter'>
                <div className='divBotones'>
                    <button className='botonesCounter' type='button' onClick={suma}>+</button>
                    <h2>{contador}</h2>
                    <button className='botonesCounter' type='button' onClick={resta}>-</button>
                </div>
                <div className='divBoton'>
                    <button className='botonCounter' type='button'>Agregar al carrito</button>
                </div>
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
