import { useEffect, useState } from 'react';

const Counter = ({ contador }) => {

    useEffect(() => {
        console.log('Esto lo hago cuando se monte al DOM');
        return () => {
            console.log('me muestro cuando el componente se desmonta')
        }
    }, [])

    useEffect(() => {
        console.log('Esto lo hago cuando cambian las propiedades del DOM');
    }, [contador])

    console.log('Me muestro antes de arrancar el DOM')

    

    return (
        <>
            Productos en carrito: {contador}
        </>
    )
}

export default Counter;

