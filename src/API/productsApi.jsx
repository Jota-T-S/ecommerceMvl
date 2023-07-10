import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_PRODUCTS_URL;
const CACHE_TIME = 60 * 60 * 1000; // 1 hora en milisegundos

export const getAllProducts = async () => {
  try {
    const cachedData = localStorage.getItem("productCache");
    const parsedData = cachedData ? JSON.parse(cachedData) : null;

    if (parsedData && Date.now() - parsedData.timestamp < CACHE_TIME) {
      return parsedData.data;
    }

    const response = await axios.get(BASE_URL);

    localStorage.setItem(
      "productCache",
      JSON.stringify({ data: response.data, timestamp: Date.now() })
    );

    console.log("Almacenamiento local actualizado");
    return response.data;
  } catch (error) {
    console.log("Ocurrió un error:", error);
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
