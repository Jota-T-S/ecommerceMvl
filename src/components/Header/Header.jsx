import "./header.scss";

export const Header = ({ title }) => {
  return (
    <section className="header-section">
      <h1 className="header-title">{title}</h1>
    </section>
  );
};
