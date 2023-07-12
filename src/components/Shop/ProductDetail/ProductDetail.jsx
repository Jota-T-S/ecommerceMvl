import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../context/Cart/CartContext";
import { Counter } from "../Counter/Counter";
import { Tag } from "../../Tag/Tag";
import "./productDetail.scss";

export const ProductDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useContext(CartContext);

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };

  return (
    <>
      {/* <div className="product-container">
        <div className="product-detail">
          <div className="img-product">
            <img src={data.imgUrl} alt={data.brand} />
          </div>
          <div className="product-card-info">
            <div className="product-info">
              <div className="title-tag">
                <Tag title={"Móvil"} />
              </div>
              <h1>
                {data.brand} - <span>{data.model}</span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the pr int ing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since.
              </p>
              <span className="price">{data.price}€</span>
            </div>
            <div className="filters-select">
              <div className="filter-select-color">
                <label htmlFor="color-select">Color:</label>
                <select id="color-select">
                  {data.options?.colors.map((color) => (
                    <option key={color.code} value={color.name}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-select-storage">
                <label htmlFor="storage-select">Memoria:</label>
                <select id="storage-select">
                  {data.options?.storages.map((storage) => (
                    <option key={storage.code} value={storage.name}>
                      {storage.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {goToCart ? (
              <div className="link-finish">
                <NavLink to="/cart" className="finish">
                  <span> Finish </span>
                </NavLink>
                <NavLink to="/" className="continue">
                  {" "}
                  Continue Shop{" "}
                </NavLink>
              </div>
            ) : (
              <Counter onAdd={onAdd} />
            )}
          </div>
        </div>
      </div> */}

      <div className="product-container">
        <div className="img-product">
          <img src={data.imgUrl} alt={data.brand} />
        </div>
        <div className="product-card-info">
          <div className="product-info">
            <Tag title={"Móvil"} />
            <h1>
              {data.brand} - <span>{data.model}</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the pr int ing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
            <span className="price">{data.price}€</span>
            <div className="selects">
              <div className="select-color">
                <label htmlFor="color-select">Color:</label>
                <select id="color-select">
                  {data.options?.colors.map((color) => (
                    <option key={color.code} value={color.name}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="select-storage">
                <label htmlFor="storage-select">Memoria:</label>
                <select id="storage-select">
                  {data.options?.storages.map((storage) => (
                    <option key={storage.code} value={storage.name}>
                      {storage.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          {goToCart ? (
            <div className="link-finish">
              <NavLink to="/cart" className="finish">
                <span> Finish </span>
              </NavLink>
              <NavLink to="/" className="continue">
                {" "}
                Continue Shop{" "}
              </NavLink>
            </div>
          ) : (
            <Counter onAdd={onAdd} />
          )}
        </div>
      </div>
    </>
  );
};
