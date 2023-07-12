import "./priceFilter.scss";

export const PriceFilter = ({ setPriceFilter }) => {
  const handlePriceFilterChange = (selectedPriceFilter) => {
    setPriceFilter(selectedPriceFilter);
  };

  return (
    <div className="filters">
      <span className="title-filter">Precio</span>
      <div className="price-filter">
        <span onClick={() => handlePriceFilterChange("<100")}>
          Menos de 100€
        </span>
        <span onClick={() => handlePriceFilterChange("100-200")}>
          100€ - 200€
        </span>
        <span onClick={() => handlePriceFilterChange(">200")}>Más de 200€</span>
      </div>
    </div>
  );
};
