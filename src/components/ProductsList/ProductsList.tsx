import { useEffect, useState } from "react";
import { List, ListItem } from "@mui/material";
import fetchAllProducts from "../../api/fetchAllProducts";
import useStyles from "./ProductsList.styles";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { IProduct } from "../../types/api";
import Loader from "../Loader/Loader";

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
    const sortedProducts = [...productsList].sort(
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
          {sortProducts().map((element: IProduct) => (
            <ListItem key={element.id}>
              <Link
                to={`/products/${element.id}`}
                state={{ from: location }}
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
