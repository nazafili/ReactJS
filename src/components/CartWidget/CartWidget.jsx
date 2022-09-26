import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <div>
      <Link to='/cart'>
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
    </div>
  )
}

export default CartWidget;