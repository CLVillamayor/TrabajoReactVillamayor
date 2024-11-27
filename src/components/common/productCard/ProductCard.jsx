import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./productCard.css";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
const ProductCard = ({ title, price, description, imageUrl, id }) => {
  return (
    <Card sx={{ width: 330, height: 650 }}>
      <CardMedia sx={{ height: 310 }} image={imageUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/productDetail/${id}`}>
          <Button size="small">Ver Detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
