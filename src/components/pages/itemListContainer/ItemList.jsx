import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  if (items.length === 0) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ItemList;
