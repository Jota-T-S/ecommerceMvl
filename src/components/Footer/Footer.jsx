import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="col-footer">
        <img src={logo} alt="" />
      </div>
      <div className="col-footer">
        <h4>Contacto</h4>
        <NavLink to={"/"}>info@info.com</NavLink>
        <NavLink to={"/"}>+666 666 666</NavLink>
        <NavLink to={"/"}>NY 10461 - NEW YORK.</NavLink>
      </div>
      <div className="col-footer">
        <h4>Ayuda</h4>
        <NavLink to={"/"}>Documentación</NavLink>
        <NavLink to={"/"}>FAQ</NavLink>
      </div>
      <div className="col-footer">
        <h4>Síguenos</h4>
        <NavLink to={"/"}>Linkedin</NavLink>
        <NavLink to={"/"}>GitHub</NavLink>
      </div>
    </footer>
  );
};
