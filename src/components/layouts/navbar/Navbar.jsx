import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

import { categories } from "./categories";
import { Link } from "react-router-dom";

const Navbar = () => {
  let nombre = "Jucawill Comics";

  const [darkMode, setdarkMode] = useState(false);
  const tooggleMode = () => {
    setdarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "container-Navbar-Dark" : "container-Navbar"}>
      <h1 className="title">
        <Link to="/">{nombre}</Link>
      </h1>

      <ul>
        {categories.map(({ title, path }) => (
          <Link key={title} to={path}>
            {title}
          </Link>
        ))}
      </ul>

      <button onClick={tooggleMode}>Cambiar de Modo</button>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
