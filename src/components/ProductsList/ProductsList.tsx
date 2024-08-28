import { useEffect, useState } from "react";
import { Box, List, ListItem } from "@mui/material";
import fetchAllProducts from "../../api/fetchAllProducts";
import CircularProgress from "@mui/material/CircularProgress";
import useStyles from "./ProductsList.styles";
import { Link } from "react-router-dom";
import { IProducts } from "../../types/api";

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sorted, setsorted] = useState<string>("");
  const classes = useStyles();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    setIsLoading(true);
    try {
      const products = await fetchAllProducts();
      setProductsList(products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const sortProducts = () => {
    const sortedProducts = [...productsList].sort(
      (a: IProducts, b: IProducts) => {
        switch (sorted) {
          case "title_a-z":
            return a.title.localeCompare(b.title);

          case "title_z-a":
            return b.title.localeCompare(a.title);

          case "price_up":
            return a.price - b.price;

          case "price_down":
            return b.price - a.price;

          default:
            return 0;
        }
      }
    );
    return sortedProducts;
  };

  return (
    <>
      {isLoading ? (
        <Box className={classes.loader}>
          <CircularProgress />
        </Box>
      ) : (
        <List>
          {sortProducts().map((element: IProducts) => (
            <ListItem key={element.id}>
              <Link
                to={`/products/${element.id}`}
                className={classes.productWrapper}
              >
                <img src={element.image} width={100} />

                <div className={classes.title}>{element.title}</div>

                <div>{element.price.toFixed(2)}$</div>
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default ProductsList;
