import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./cart.css";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  const limpiarconAlert = () => {
    Swal.fire({
      title: "Seguro quiere limpiar el carrito?",
      showConfirmButton: true,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si,limpiar el carrito",
      denyButtonText: `No, mantener el carrito`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El carrito se limpió correctamente",
        });
      } else if (result.isDenied) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "El carrito se mantiene igual",
        });
      }
    });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Este es el carrito</h2>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>Titulo{product.title}</h2>
            <h3>Precio${product.price}</h3>
            <h3>Cantidad{product.quantity}</h3>
            <h3>Subtotal:{product.price * product.quantity}</h3>
            <Button
              className="delete-button"
              variant="contained"
              onClick={() => deleteProductById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}

      {total > 0 && (
        <>
          <Button
            className="clean-button"
            sx={{ marginTop: 20 }}
            variant="contained"
            onClick={limpiarconAlert}
          >
            Limpiar Carrito
          </Button>
          <Link to="/checkout">
            <Button
              className="finish-button"
              sx={{ marginTop: 20 }}
              variant="contained"
            >
              Finalizar Compra
            </Button>
          </Link>
        </>
      )}

      {total > 0 ? (
        <h2>El total a pagar es: ${total}</h2>
      ) : (
        <h2>No tiene productos en el carrito.</h2>
      )}
    </div>
  );
};

export default Cart;
