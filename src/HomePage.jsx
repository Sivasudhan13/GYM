import React, { useState } from "react";

import ProductPage from "./pages/ProductPage";
import CarouselComponent from "./pages/CarouselComponent";
import NavBar from "./components/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <CarouselComponent />
      <ProductPage />
    </div>
  );
};

export default HomePage;
