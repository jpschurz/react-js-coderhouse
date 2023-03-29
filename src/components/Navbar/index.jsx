import { NavLink } from "react-router-dom"
import { HiShoppingCart } from "react-icons/hi"
//import CartWidget from "../CartWidget"
import styles from "./navbar.module.scss"

const Navbar = () => {
  const activeStyle = {
    color: "red",
  };
  
  return (
    <nav className={styles.container_nav}>
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Products</p>
      </NavLink>
      <NavLink
        to="/cart"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <HiShoppingCart />
      </NavLink>
    </nav>
     /* <nav className="container_nav">
        <div className="logo">
          <img className="img-logo" src="src/assets/cart.png" alt="Carrito" href="/" />
        </div>
        <ul className="menu">
          <a href="#home">Home</a>
          <a href="#sobre-nosotros">Sobre nosotros</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </ul>
        <CartWidget />
      </nav>*/
  );
};

export default Navbar;