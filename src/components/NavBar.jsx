import React, { useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 sm:px-10 py-4 w-full">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">GymMart</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li className="underline underline-offset-4 cursor-pointer">Home</li>
          <li className="cursor-pointer">contact</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Sign Up</li>
        </ul>

        {/* Search and Icons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm w-40"
            />
            <FiSearch className="text-xl ml-2" />
          </div>
          <FiHeart className="text-2xl cursor-pointer" />
          <div>
            <Link to="/Add">
              <FiShoppingCart className="cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li className="underline underline-offset-4 cursor-pointer">
              Home
            </li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Sign Up</li>
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-sm w-full"
              />
              <FiSearch className="text-xl ml-2" />
            </div>
            <div className="flex gap-6 text-2xl">
              <FiHeart className="cursor-pointer" />
              <div>
                <Link to="/Add">
                  <FiShoppingCart className="cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
