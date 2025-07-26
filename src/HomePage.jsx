import React, { useState } from "react";

import ProductPage from "./pages/ProductPage";

import CarouselPage from "./pages/CarouselPage";
import NavBar from "./components/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <CarouselPage />
      <ProductPage />
    </div>
  );
};

export default HomePage;
