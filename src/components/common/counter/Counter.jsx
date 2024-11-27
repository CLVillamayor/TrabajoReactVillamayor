import { Button } from "@mui/material";
import "./counter.css";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div className="counter-container">
      <h2 className="counter-quantity">{contador}</h2>
      <div className="counter-buttons">
        <Button className="counter-button" variant="contained" onClick={restar}>
          Restar
        </Button>
        <Button className="counter-button" variant="contained" onClick={sumar}>
          Sumar
        </Button>
      </div>
      <div className="add-to-cart">
        <Button
          className="add-to-cart-button"
          variant="outlined"
          onClick={() => onAdd(contador)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default Counter;
