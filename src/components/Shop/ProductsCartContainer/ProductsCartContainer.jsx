import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/Cart/CartContext";
import { ProductsCart } from "../ProductsCart/ProductsCart";
import "./productsCartcontainer.scss";

export const ProductsCartContainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="section-cart">
        <div className="text-info">
          <p> El carrito está vacío </p>
        </div>
        <div className="back-link">
          <Link to="/"> Explorar productos </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section-listCart">
      {cart.map((product) => (
        <ProductsCart key={product.id} product={product} />
      ))}
      <div className="total">
        <p className="total-cart">
          Total: <span>{getTotalPrice()} €</span>
        </p>
      </div>
    </div>
  );
};
