import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center text-3xl font-extrabold uppercase text-black">
            SHOP.CO
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium relative">
          <div
            className="relative"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600">
              Shop{" "}
              {isDropdownOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  Home
                </Link>
                <Link to="/cart" className="block px-4 py-2 hover:bg-gray-100">
                  Cart
                </Link>
                <Link
                  to="/category/electronics"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Category
                </Link>
                <Link
                  to="/checkout"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Checkout
                </Link>
                <Link
                  to="/product/1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Product Detail
                </Link>
              </div>
            )}
          </div>

          {/* Hash links for Home sections */}
          <Link to="/#top_selling" className="hover:text-blue-600">
            On Sale
          </Link>
          <Link to="/#new_arrival" className="hover:text-blue-600">
            New Arrival
          </Link>
          <Link to="/#browse_style" className="hover:text-blue-600">
            Brand
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ShoppingCart size={24} className="text-gray-700 cursor-pointer" />
          <User size={24} className="text-gray-700 cursor-pointer" />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 text-gray-700">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between px-4 py-2 w-full bg-gray-100 rounded-md"
          >
            Shop <ChevronDown size={16} />
          </button>

          {isDropdownOpen && (
            <div className="flex flex-col pl-4">
              <Link to="/" className="py-1 hover:text-blue-600">
                Home
              </Link>
              <Link to="/cart" className="py-1 hover:text-blue-600">
                Cart
              </Link>
              <Link
                to="/category/electronics"
                className="py-1 hover:text-blue-600"
              >
                Category
              </Link>
              <Link to="/checkout" className="py-1 hover:text-blue-600">
                Checkout
              </Link>
              <Link to="/product/1" className="py-1 hover:text-blue-600">
                Product Detail
              </Link>
            </div>
          )}

          <Link to="/#top_selling" className="px-4 py-2 hover:text-blue-600">
            On Sale
          </Link>
          <Link to="/#new_arrival" className="px-4 py-2 hover:text-blue-600">
            New Arrival
          </Link>
          <Link to="/#browse_style" className="px-4 py-2 hover:text-blue-600">
            Brand
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
