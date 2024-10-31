import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import Badge from "@mui/material/Badge";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={1} color="primary">
        <ShoppingCartTwoToneIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
