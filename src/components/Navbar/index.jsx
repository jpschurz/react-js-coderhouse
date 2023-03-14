import CartWidget from "../CartWidget"
import styles from "./navbar.module.scss"

const Navbar = () => {
  return (
      <nav className="container_nav">
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
      </nav>
  );
};

export default Navbar;