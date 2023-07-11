import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ProductDetail } from "../ProductDetail/ProductDetail";
import { getProductById } from "../../../API/productsApi";
import { ProductTableDetail } from "../ProductTableDetail/ProductTableDetail";

export const ProductDetailContainer = () => {
  const [data, setData] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchApiProduct = async () => {
      try {
        const productData = await getProductById(productId);
        setData(productData);
      } catch (error) {
        return error;
      }
    };

    fetchApiProduct();
  }, []);
  console.log(data);
  return (
    <>
      <ProductDetail data={data} />
      <ProductTableDetail infoData={data} />
    </>
  );
};
