import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_PRODUCTS_URL;
const CACHE_TIME = 60 * 1000; // 1 hora en milisegundos

export const getAllProducts = async () => {
  try {
    const cachedData = localStorage.getItem(BASE_URL);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      if (Date.now() - parsedData.timestamp < CACHE_TIME) {
        return parsedData.data;
      }
    }

    const response = await axios.get(BASE_URL);
    console.log(
      "Solicitud a la API realizada:",
      new Date().toLocaleTimeString("es-ES")
    );
    localStorage.setItem(
      BASE_URL,
      JSON.stringify({ data: response.data, timestamp: Date.now() })
    );
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
