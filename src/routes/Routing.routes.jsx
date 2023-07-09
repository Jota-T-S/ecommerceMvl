import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
