import "./search.scss";

export const Search = ({ query, onInputChange }) => {
  const handleInput = ({ target }) => {
    const { value } = target;
    onInputChange(value);
  };

  return (
    <div className="input-search">
      <input
        type="search"
        value={query}
        name="filter"
        placeholder="Buscar..."
        onChange={handleInput}
      />
    </div>
  );
};
