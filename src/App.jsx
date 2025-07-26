import React, { useState } from "react";
import HomePage from "./HomePage";
import {data} from "./data/dataset.js";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CardContext } from "./contexts/CardContext";
import AddToCard from "./pages/AddToCard.jsx";

const App = () => {
  const [card, setCard] = useState(data);
  const [AddCard, setAddCard] = useState([]);

  return (
    <CardContext.Provider value={{ card, AddCard, setAddCard }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Add" element={<AddToCard />} />
        </Routes>
      </BrowserRouter>
    </CardContext.Provider>
  );
};

export default App;
