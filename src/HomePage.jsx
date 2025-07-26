import React, { useState } from "react";
import Navbar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";
import CarouselComponent from "./pages/CarouselComponent";

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
