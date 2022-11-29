import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './CartWidget.css';

function CartWidget() {
  return (
    <i><FontAwesomeIcon icon={faCartShopping} /></i>
  )
}

export default CartWidget