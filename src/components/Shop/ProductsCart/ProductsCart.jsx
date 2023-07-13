import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../context/Cart/CartContext";
import "./productsCart.scss";

export const ProductsCart = ({ product }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <div className="section-productCart">
      <NavLink to={`detail/${product.id}`} className="img-cart">
        <img src={product.imgUrl} alt={product.brand} />
      </NavLink>
      <div className="container-infoCart">
        <div className="info-cart">
          <div className="title-cart">
            <h3>{product.brand}</h3>
          </div>
          <div className="price-cart">
            <p>
              <span>Modelo:</span> {product.model}
            </p>
            <p>
              <span>Precio:</span> {product.price} €
            </p>
            <p>
              <span>Unidades:</span> {product.quantity} und.
            </p>
            <p>
              <span>Subtotal:</span> {product.quantity * product.price} €
            </p>
          </div>
        </div>
        <div>
          <button
            className="btn-deleteCart"
            onClick={() => removeProduct(product.id)}
          >
            <span>x</span>
          </button>
        </div>
      </div>
    </div>
  );
};
