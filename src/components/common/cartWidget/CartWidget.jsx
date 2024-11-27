import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();
  return (
    <div>
      <Badge badgeContent={totalItems} color="primary" max={60} showZero={true}>
        <ShoppingCartTwoToneIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
