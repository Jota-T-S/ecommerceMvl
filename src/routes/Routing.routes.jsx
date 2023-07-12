import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Error } from "../pages";
import { NavBar, Footer, ProductsList } from "../components";
// import { ProductsList } from "../components/Shop/ProductList/ProductsList";
// import { Error } from "../pages/Error/Error";
import { ProductDetailContainer } from "../components/Shop/ProductDetailContainer/ProductDetailContainer";

export const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/detail/:productId" element={<ProductDetailContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
