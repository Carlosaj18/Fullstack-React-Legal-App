import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './CartWidget.css';

function CartWidget({setPreviewCart, previewCart}) {

  // Mimsa logica con el onClick 
  function onClickButtonPreviewCart(){
    return setPreviewCart(!previewCart)
  }

  return (

    <i><FontAwesomeIcon icon={faCartShopping} onClick={()=> onClickButtonPreviewCart()}/></i>
  )
}

export default CartWidget