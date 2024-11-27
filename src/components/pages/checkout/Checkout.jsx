import { Button, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../../config-firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const { cart, getTotalAmount, clearCart } = useContext(CartContext);
  const [orderID, setOrderID] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let total = getTotalAmount();

    const order = {
      buyer: user,
      items: cart,
      total,
      date: new Date(),
    };

    let refCollection = collection(db, "orders");
    addDoc(refCollection, order)
      .then((res) => {
        setOrderID(res.id);
        clearCart();
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Hubo un problema al procesar su compra,por favor intentelo de nuevo."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });

    order.items.forEach((elemento) => {
      let refDoc = doc(db, "productos", elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <h1>Procesando la compra...</h1>
        <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
          <CircularProgress color="success" />
        </Stack>
      </div>
    );
  }

  return (
    <div>
      {orderID ? (
        <h1
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
          }}
        >
          Gracias por su compra, su número de orden es: {orderID}
        </h1>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <TextField
            label="Nombre"
            variant="outlined"
            value={user.name}
            onChange={handleChange}
            name="name"
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={user.email}
            onChange={handleChange}
            name="email"
            required
          />
          <TextField
            label="Dirección"
            variant="outlined"
            value={user.address}
            onChange={handleChange}
            name="address"
            required
          />
          <TextField
            label="Teléfono"
            variant="outlined"
            type="tel"
            value={user.phone}
            onChange={handleChange}
            name="phone"
            required
          />

          <Button type="submit" variant="contained">
            Comprar
          </Button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
