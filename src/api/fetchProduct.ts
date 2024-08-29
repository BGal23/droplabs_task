import axios from "axios";

const fetchProduct = async (id: string | undefined) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProduct;
