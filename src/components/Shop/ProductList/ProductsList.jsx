import { useState, useEffect } from "react";
import { getAllProducts } from "../../../API/productsApi";
import { ProductItem } from "../ProductItem/ProductItem";
import { Search } from "../Search/Search";
import { PriceFilter } from "../PriceFilter/PriceFilter";
import { Tag } from "../../Tag/Tag";
import "./productsList.scss";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [query, setQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

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

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  const handleInputChange = (value) => {
    setQuery(value);
    setPriceFilter("");
  };

  const applyPriceFilter = (product) => {
    const price = product.price;

    if (priceFilter === "<100") {
      return price < 100;
    } else if (priceFilter === "100-200") {
      return price >= 100 && price <= 200;
    } else if (priceFilter === ">200") {
      return price > 200;
    }

    return true;
  };

  return (
    <div className="products-container">
      <div className="title-section">
        <Tag title={"Productos"} />
        <h2>Lorem Ipsum is simply dummy </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="products-list-container">
        <div className="menu-filter">
          <Search query={query} onInputChange={handleInputChange} />
          <PriceFilter
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
        </div>

        <div className="product-btn">
          <div className="products-list">
            {products
              .filter(({ brand, model }) => {
                if (!query) return true;
                else {
                  const brandLowerCase = brand.toLowerCase();
                  const modelLowerCase = model.toLowerCase();
                  return (
                    brandLowerCase.includes(query.toLowerCase()) ||
                    modelLowerCase.includes(query.toLowerCase())
                  );
                }
              })
              .filter(applyPriceFilter)
              .slice(0, visibleProducts)
              .map((product) => {
                return <ProductItem key={product.id} product={product} />;
              })}
          </div>
          <div className="button-view-more">
            {visibleProducts < products.length && (
              <button onClick={loadMoreProducts}>ver más</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
