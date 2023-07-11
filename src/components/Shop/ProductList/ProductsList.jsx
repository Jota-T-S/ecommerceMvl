import { useState, useEffect } from "react";
import { getAllProducts } from "../../../API/productsApi";
import { ProductItem } from "../ProductItem/ProductItem";
import "./productsList.scss";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApiProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        return error;
      }
    };

    fetchApiProducts();
  }, []);

  console.log(products);
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
