import { NavLink } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export const Error = () => {
  return (
    <>
      <Header
        title={
          <>
            <span className="title-span">Oops!</span>
            <br />
            We can't seem to find the page you're looking for.
          </>
        }
      />
      <div className="back-link">
        <NavLink to="/">Back to Home</NavLink>
      </div>
    </>
  );
};
