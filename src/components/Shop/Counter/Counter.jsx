import { useState } from "react";
import "./counter.scss";

export const Counter = ({ onAdd }) => {
  const [count, setCount] = useState(1);

  const decrease = () => {
    setCount((prevState) => prevState - 1);
  };

  const increase = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="counter-container">
      <div className="btns-count">
        <button
          disabled={count <= 0}
          className="btn-counter"
          onClick={decrease}
        >
          <span> - </span>
        </button>
        <span className="number-counter">{count}</span>
        <button className="btn-counter" onClick={increase}>
          <span> + </span>
        </button>
      </div>
      <div className="btn-add-contain">
        <button onClick={() => onAdd(count)} className="btn-add-detail">
          <span className="span-add"> Comprar </span>
        </button>
      </div>
    </div>
  );
};
