import React, { useState } from "react";

import ProductPage from "./pages/ProductPage";

import Navbar from "./components/NavBar";
import CarouselPage from "./pages/CarouselPage";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CarouselPage />
      <ProductPage />
    </div>
  );
};

export default HomePage;
