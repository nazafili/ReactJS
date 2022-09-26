import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {getTotalProducts} = useContext(CartContext);
  return (
    <div>
      <Link to='/cart'>
        <FontAwesomeIcon icon={faCartShopping} />
        <span style={{backgroundColor: 'white', fontSize: '31px', borderRadius: '50%', width: '10px', height: '10px', color: 'black', margin: '0px 20px 40px 0', padding: '7px' }}> {getTotalProducts()} </span>
      </Link>
    </div>
  )
}

export default CartWidget;