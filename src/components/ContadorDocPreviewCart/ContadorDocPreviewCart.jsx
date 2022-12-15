import React, {useState} from "react";
import "./ContadorDocPreviewCart.css";

function ContadorDocPreviewCart() {
  const [count, setCount] = useState(0);

  function handleClickRest() {
    if(count !== 0){
        setCount(count - 1);
    }
  }
  function handleClickSum() {
    setCount(count + 1);
  }
  return (
    <div className="contador">
      <button onClick={handleClickRest} className="left">-</button>
      <button className="center">{count}</button>
      <button onClick={handleClickSum}  className="right">+</button>
    </div>
  );
}

export default ContadorDocPreviewCart;
