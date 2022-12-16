import React, { useState } from "react";
import "./ContadorDocPreviewCart.css";

function ContadorDocPreviewCart({ cantidad }) {
  const [count, setCount] = useState(cantidad);

  function handleClickRest() {
    if (cantidad !== 0) {
      setCount(count - 1);
    }
  }
  function handleClickSum() {
    setCount(count + 1);
  }

  return (
    <div className="contador">
      <button onClick={handleClickRest} className="left">
        -
      </button>
      <button className="center">{count}</button>
      <button onClick={handleClickSum} className="right">
        +
      </button>
    </div>
  );
}

export default ContadorDocPreviewCart;
