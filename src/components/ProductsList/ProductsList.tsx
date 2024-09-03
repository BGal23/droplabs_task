import { useEffect, useState } from "react";
import { Box, List, ListItem } from "@mui/material";
import fetchAllProducts from "../../api/fetchAllProducts";
import useStyles from "./ProductsList.styles";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { IProduct } from "../../types/api";
import Loader from "../Loader/Loader";
import deepClone from "lodash.clonedeep";

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sorted, setSorted] = useState<string>("");
  const [sortParam] = useSearchParams();
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const sortValue = sortParam.get("sort") || "";
    setSorted(sortValue);
  }, [sortParam]);

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
    const productListDeepCopy = deepClone(productsList);
    const sortedProducts = productListDeepCopy.sort(
      (a: IProduct, b: IProduct) => {
        switch (sorted) {
          case "a-z":
            return a.title.localeCompare(b.title);

          case "z-a":
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
        <Loader />
      ) : (
        <List>
          {sortProducts().map(({ id, image, title, price }: IProduct) => (
            <ListItem key={id}>
              <Link
                to={`/products/${id}`}
                state={{ from: location }}
                className={classes.productWrapper}
              >
                <img className={classes.image} src={image} width={100} />
                <Box
                  sx={{ flexDirection: { sm: "row", xs: "column" } }}
                  className={classes.textWrapper}
                >
                  <div className={classes.title}>{title}</div>

                  <div className={classes.price}>{price.toFixed(2)}$</div>
                </Box>
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default ProductsList;
