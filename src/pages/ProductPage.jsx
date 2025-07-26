import React, { useContext, useState } from "react";
import { CardContext } from "../contexts/CardContext";

const ProductPage = () => {
  const { card, AddCard, setAddCard } = useContext(CardContext);

  const handleAddToCart = (product) => {
    setAddCard([...AddCard, product]);
  };

  return (
    <div>
      <div className="p-4 max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Gym Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {card.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-700 text-sm mb-1">{product.details}</p>
                <p className="text-gray-800 font-semibold mt-2">
                  Price: ₹{product.price} Weight : {product.weight}
                </p>
                {AddCard.includes(product) ? (
                  <button
                    onClick={() => handleremove(product)}
                    className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded"
                  >
                    Added to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
