import { useContext } from "react";
import { CartContext } from "../../../context/Cart/CartContext";
import "./widgetCount.scss";

export const WidgetCount = () => {
  const { getTotalProduct } = useContext(CartContext);

  return <span className="count-cart">{getTotalProduct() || "0"}</span>;
};
