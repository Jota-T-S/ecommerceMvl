import { Tag } from "../../Tag/Tag";
import "./productDetail.scss";

export const ProductDetail = ({ data }) => {
  return (
    <div className="product-container">
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
              Lorem Ipsum is simply dummy text of the pr int ing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
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
        </div>
      </div>
    </div>
  );
};
