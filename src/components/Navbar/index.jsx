import { NavLink } from "react-router-dom"
import { HiShoppingCart } from "react-icons/hi"
import styles from "./main.module.scss"


function Navbar() {

  const activeStyle = {
    color: "red",
  };
  
  return (
    <header>
      <nav className={styles.container_nav}>
        <div className={styles.logo}>
        <NavLink to="/home"><img className="" src="" alt=""/></NavLink>
        </div>        
        <div className={styles.menu}>
          <NavLink to="/home" style={({ isActive }) => (isActive ? activeStyle : undefined)}><p className={styles.items}>Home</p></NavLink>
          <NavLink to="/products" style={({ isActive }) => (isActive ? activeStyle : undefined)}><p className={styles.items}>Products</p></NavLink>
          <NavLink to="/cart" style={({ isActive }) => (isActive ? activeStyle : undefined)}><p className={styles.items}><HiShoppingCart /></p></NavLink>
        </div>
    </nav>
    </header>
  );
};

export default Navbar;