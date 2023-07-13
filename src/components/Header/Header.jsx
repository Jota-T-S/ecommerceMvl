import { useScrollScale } from "../../hooks/useScrollScale";
import "./header.scss";

export const Header = ({ title }) => {
  const scale = useScrollScale(89, 95);

  return (
    <div className="header-container">
      <section className="header-section" style={{ width: `${scale}%` }}>
        <h1 className="header-title">{title}</h1>
      </section>
    </div>
  );
};
