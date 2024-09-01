import axios from "axios";

const fetchProduct = async (id: string | undefined) => {
  try {
    const res = await axios.get(`/products/${id}`);

    if (!res.data) {
      throw new Error("No data for the given ID");
    } else {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchProduct;
