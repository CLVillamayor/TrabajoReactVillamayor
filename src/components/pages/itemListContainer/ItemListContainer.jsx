import ProductCard from "../../common/productCard/ProductCard";

const ItemListContainer = () => {
  return (
    <div>
      <h1>Bienvenido a Jucawill,la casa de tus comics favoritos.</h1>
      <h3>Lista de productos</h3>
      <div>
        <ProductCard titulo="Sandman Obertura" precio={15000} />
        <ProductCard
          titulo="Batman Detective Comics:Comienza la batalla por Gotham!"
          precio={10000}
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
