import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Footer, ProductDetailContainer } from "../components";
import { Home, Error, Cart } from "../pages";

export const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/detail/:productId" element={<ProductDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
