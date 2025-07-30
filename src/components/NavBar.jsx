import React, { useContext, useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CardContext } from "../contexts/CardContext";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { card } = useContext(CardContext);
  const [search, setSearch] = useState("");

  const filterdata = card.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav className="bg-white shadow-md px-4 sm:px-10 py-4 w-full relative z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">GymMart</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li className="underline underline-offset-4 cursor-pointer">Home</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Sign Up</li>
        </ul>

        {/* Search and Icons (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4 relative">
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm w-40"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FiSearch className="text-xl ml-2" />
          </div>

          {/* Search Results Dropdown */}
          {search && (
            <ul className="absolute top-12 left-0 bg-white border shadow-md mt-1 p-2 rounded w-60 z-50 max-h-60 overflow-y-auto">
              {filterdata.length > 0 ? (
                filterdata.map((item, index) => (
                  <li key={index} className="py-1 border-b text-sm">
                    {item.name}
                  </li>
                ))
              ) : (
                <li className="py-1 text-gray-500 text-sm">No results found</li>
              )}
            </ul>
          )}

          <FiHeart className="text-2xl cursor-pointer" />
          <Link to="/Add">
            <FiShoppingCart className="cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
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

          {/* Mobile Search */}
          <div className="flex flex-col gap-3 mt-4 relative">
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-sm w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FiSearch className="text-xl ml-2" />
            </div>

            {/* Mobile Filter Results */}
            {search && (
              <ul className="absolute top-16 left-0 bg-white border shadow-md mt-1 p-2 rounded w-full z-50 max-h-60 overflow-y-auto">
                {filterdata.length > 0 ? (
                  filterdata.map((item, index) => (
                    <li key={index} className="py-1 border-b text-sm">
                      {item.name}
                    </li>
                  ))
                ) : (
                  <li className="py-1 text-gray-500 text-sm">
                    No results found
                  </li>
                )}
              </ul>
            )}

            <div className="flex gap-6 text-2xl">
              <FiHeart className="cursor-pointer" />
              <Link to="/Add">
                <FiShoppingCart className="cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
