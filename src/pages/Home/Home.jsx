import { Header } from "../../components/Header/Header";
import { ProductsList } from "../../components/Products/ProductsList";

export const Home = () => {
  return (
    <>
      <Header
        title={
          <>
            Descubre nuestra selección de{" "}
            <span className="title-span">Móviles</span>
          </>
        }
      />
      <ProductsList />
    </>
  );
};
