import { NavLink } from "react-router-dom";
import "./productItem.scss";

export const ProductItem = ({ product }) => {
  return (
    <article className="product-card" key={product.id}>
      <NavLink className="link-card" to={`detail/${product.id}`}>
        <img src={product.imgUrl} alt={product.brand} />
        <h3>
          {product.brand} - <span>{product.model}</span>
        </h3>
      </NavLink>
      <p>{product.price}€</p>
    </article>
  );
};
