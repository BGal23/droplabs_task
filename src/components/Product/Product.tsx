import { useEffect, useState } from "react";
import fetchProduct from "../../api/fetchProduct";
import { useParams } from "react-router-dom";
import useStyles from "./Product.style";
import { IProduct } from "../../types/api";
import Loader from "../Loader/Loader";
import { Box } from "@mui/material";

const Product = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<IProduct | null>(null);
  const { id } = useParams<{ id: string }>();
  const classes = useStyles();

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);

  const getProduct = async (id: string) => {
    setIsLoading(true);
    try {
      const selectedProduct = await fetchProduct(id);
      setProduct(selectedProduct);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : !product ? (
        <Box className={classes.error}>
          <h3>Sorry, this product doesn't exist.</h3>
        </Box>
      ) : (
        <Box
          sx={{ flexDirection: { lg: "row", xs: "column" } }}
          className={classes.productWrapper}
        >
          <img
            className={classes.image}
            src={product.image}
            alt={product.title}
            width={300}
          />

          <Box className={classes.textWrapper}>
            <h3>{product.title}</h3>

            <div>
              Price: <b>{product.price.toFixed(2)}$</b>
            </div>

            <div>
              Category: <b>{product.category}</b>
            </div>

            <Box className={classes.rate}>
              <div>
                Rate: <b>{product.rating.rate.toFixed(1)}/5.0</b>
              </div>

              <div>({product.rating.count} ratings)</div>
            </Box>
            <Box>
              <div>Description:</div>

              <div className={classes.description}>{product.description}</div>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Product;
