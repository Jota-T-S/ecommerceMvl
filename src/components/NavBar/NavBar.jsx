import { NavLink } from "react-router-dom";
import { WidgetCount } from "../Shop/WidgetCount/WidgetCount";
import logo from "../../assets/logo/logo.png";
import iconCart from "../../assets/icons/cart.png";
import iconUser from "../../assets/icons/user.png";
import "./navBar.scss";

export const NavBar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-logo">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="nav-items">
        <NavLink className="item-user" to="/account">
          <img src={iconUser} className="icon-user" alt="icon-user" />
        </NavLink>
        <NavLink className="item-cart" to="/cart">
          <img src={iconCart} className="icon-cart" alt="icon-cart" />
        </NavLink>
        <WidgetCount />
      </div>
    </nav>
  );
};
