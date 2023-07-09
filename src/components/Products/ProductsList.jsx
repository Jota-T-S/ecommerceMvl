import { useState, useEffect } from "react";
import { getAllProducts } from "../../API/productsApi";
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
        <article className="product" key={product.id}>
          <img src={product.imgUrl} alt={product.brand} />
          <h3>
            {product.brand} - <span>{product.model}</span>
          </h3>
          <p>{product.price}€</p>
        </article>
      ))}
    </div>
  );
};
