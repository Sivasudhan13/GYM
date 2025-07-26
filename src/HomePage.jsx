import React, { createContext, useState } from "react";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";
import CarouselPage from "./pages/CarouselComponen";
import CarouselComponent from "./pages/CarouselComponen";
import AddToCard from "./pages/AddToCard";

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
