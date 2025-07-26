import React, { useState } from "react";

import ProductPage from "./pages/ProductPage";
import CarouselComponent from "./pages/CarouselComponent";
import Navbar from "./components/NavBar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CarouselComponent />
      <ProductPage />
    </div>
  );
};

export default HomePage;
