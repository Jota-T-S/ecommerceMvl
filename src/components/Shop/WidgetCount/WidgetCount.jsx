import { useContext } from "react";
import { CartContext } from "../../../context/Cart/CartContext";
import "./widgetCount.scss";

export const WidgetCount = () => {
  const { getTotalProduct } = useContext(CartContext);

  return (
    <div className="count-cart">
      <span className="count-number">{getTotalProduct() || "0"}</span>
    </div>
  );
};
