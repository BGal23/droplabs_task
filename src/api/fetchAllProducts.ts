import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

const fetchAllProducts = async () => {
  try {
    const res = await axios.get(`/products`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAllProducts;
