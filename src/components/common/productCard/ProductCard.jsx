import "./productCard.css";
const ProductCard = ({ titulo, precio }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <h3>{precio}</h3>
      <button>Ver Detalle </button>
    </div>
  );
};

export default ProductCard;
