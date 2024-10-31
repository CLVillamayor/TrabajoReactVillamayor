import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  let nombre = "Jucawill Comics";
  const [darkMode, setdarkMode] = useState(false);
  const tooggleMode = () => {
    setdarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "container-Navbar-Dark" : "container-Navbar"}>
      <h1 className="title">{nombre}</h1>
      <ul>
        <li>Todo</li>
        <li>Novelas Gráficas</li>
        <li>Comics</li>
      </ul>
      <button onClick={tooggleMode}>Cambiar de Modo</button>
      <CartWidget />
    </div>
  );
};

export default Navbar;
