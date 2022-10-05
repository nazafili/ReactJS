import React from 'react'
import { useState } from 'react'
import {useCartContext} from '../../context/CartContext'

const Checkout = () => {


    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    

        const handleSubmit  = (e) => {
            e.preventDefault();

            const orden = {
                comprador: values,
                items: '',
                total: ''
            }
           

            if(values.nombre.length < 3) {
                alert("nombre incorrecto")
                return
            }

            if(values.email.length < 2) {
                alert("email incorrecto")
                return
            }

            console.log('Submit');
            console.log(orden);

        }

  return (

    <div className={'container my-5'}>
    <div>Checkout</div>

    <form onSubmit={handleSubmit}>
        <input name="nombre" value={values.nombre} onChange={handleInputChange} type={'text'} className={'form-control'} placeholder="nombre"/>
        <input name="email" value={values.email} onChange={handleInputChange} type={'email'} className={'form-control'} placeholder="email"/>
        <input name="direccion" value={values.direccion} onChange={handleInputChange} type={'text'} className={'form-control'} placeholder="direccion"/>

        <button type="submit" className='btn btn-primary'>Enviar</button>
    </form>
    </div>
  )
}

export default Checkout