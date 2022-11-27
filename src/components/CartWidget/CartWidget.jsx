import React from 'react'

//{/* 2 - Importar componente FontAwsomeIcon */ }
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//{ /* 3 - Importar icono deseado de alguna de la libreria de iconos gratuitos */ }
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div><FontAwesomeIcon icon={faCartShopping} /></div>
  )
}

export default CartWidget