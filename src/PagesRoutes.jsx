import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Review from "./pages/Review";
function PagesRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}
export default PagesRoutes;
