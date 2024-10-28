import "./navbar.css";

export const Navbar = () => {
  let nombre = "Jucawill";
  return (
    <div>
      <h1 className="title">{nombre}</h1>
      <ul>
        <li>Todo</li>
        <li>Novelas Gráficas</li>
        <li>Comics</li>
      </ul>
    </div>
  );
};
