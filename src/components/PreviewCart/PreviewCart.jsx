import React from "react";
import "./PreviewCart.css";

function previewCart() {
  // Debe ir en el carrito para linkearlo

  /**   function openNav() {
    document.getElementById("previewCarrito").style.width = "250px"; // preview cart
    document.getElementById("main").style.marginRight = "250px"; // header
  }
  function closeNav() {
    document.getElementById("previewCarrito").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
  } */

  return (
    <>
      <div id="previewCarrito" className="sidebar-carrito">
        <div className="title">
          <h4>Mi carrito</h4>
          <div className="closebtn">
            <i className="far fa-times-circle"></i>
          </div>
        </div>
        <div className="details">
          <p>Nombre del paquete</p>
          <p>
            <strong>El detalle de lo que contiene el paquete</strong>
          </p>
        </div>
        <div className="details">
          <p>Cantidad</p>
          <p>
            <strong>item.className=quantity </strong>
          </p>
        </div>
        <div className="details">
          <p>Precio</p>
          <p>
            <strong>$5000</strong>
          </p>
        </div>
        <button>
          <i className="far fa-trash-alt"></i>
          Borrar
        </button>
        <button>
          <a className="comprar" href="shoppingCart/shoppingCart">
            <i className="far fa-smile-wink"></i>
            Comprar
          </a>
        </button>
      </div>
      <div id="emptycart"></div>
    </>
  );
}

export default previewCart;
