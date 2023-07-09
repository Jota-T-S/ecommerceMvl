import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_PRODUCTS_URL;

export const getAllProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
