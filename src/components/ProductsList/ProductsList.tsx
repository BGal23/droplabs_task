import { useEffect, useState } from "react";
import { List, ListItem } from "@mui/material";
import fetchAllProducts from "../../api/fetchAllProducts";

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <List>
          {productsList.map((element) => (
            <ListItem key={element.id}>{element.title}</ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default ProductsList;
