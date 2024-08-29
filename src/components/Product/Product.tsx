import { useEffect, useState } from "react";
import fetchProduct from "../../api/fetchProduct";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types/api";
import Loader from "../Loader/Loader";
import { Box } from "@mui/material";

const Product = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<IProduct | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = async () => {
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
      ) : (
        product && (
          <Box>
            <img src={product.image} alt={product.title} width={300} />

            <Box>
              <h3>{product.title}</h3>
              <div>{product.price}</div>
              <div>{product.category}</div>
              <div>{product.description}</div>
              <div>{product.rating.count}</div>
              <div>{product.rating.rate}</div>
            </Box>
          </Box>
        )
      )}
    </>
  );
};

export default Product;
