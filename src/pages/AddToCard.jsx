import React, { useContext, useState, useEffect } from "react";
import { CardContext } from "../contexts/CardContext";

const AddToCard = () => {
  const { AddCard } = useContext(CardContext);
  const [cartItems, setCartItems] = useState(AddCard || []);

  // Update total count when items change
  const totalItems = cartItems.reduce((sum, item) => sum + (item.qty || 1), 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.qty || 1) * item.price,
    0
  );

  // Handle quantity increase
  const increaseQty = (index) => {
    const updated = [...cartItems];
    updated[index].qty = (updated[index].qty || 1) + 1;
    setCartItems(updated);
  };

  // Handle quantity decrease
  const decreaseQty = (index) => {
    const updated = [...cartItems];
    if ((updated[index].qty || 1) > 1) {
      updated[index].qty -= 1;
      setCartItems(updated);
    }
  };

  // Handle remove item
  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Cart Items ({totalItems})
      </h1>

      {cartItems.map((product, index) => (
        <div
          key={product.id}
          className="flex flex-col sm:flex-row items-center justify-between bg-white rounded shadow p-4 mb-4"
        >
          <div className="flex items-center space-x-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-gray-500">₹{product.price}</p>
            </div>
          </div>

          <div className="flex items-center mt-3 sm:mt-0 space-x-2">
            <button
              onClick={() => decreaseQty(index)}
              className="px-2 py-1 border rounded"
            >
              -
            </button>
            <span>{product.qty || 1}</span>
            <button
              onClick={() => increaseQty(index)}
              className="px-2 py-1 border rounded"
            >
              +
            </button>
          </div>

          <div className="text-center sm:text-right mt-3 sm:mt-0">
            <p>Subtotal: ₹{(product.qty || 1) * product.price}</p>
            <button
              onClick={() => removeItem(index)}
              className="text-red-500 text-sm mt-1"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="text-right mt-6">
        <h2 className="text-xl font-semibold">Total: ₹{totalPrice}</h2>
        <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCard;
