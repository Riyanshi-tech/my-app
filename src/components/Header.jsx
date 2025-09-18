import React, { useState } from "react";
import { ChevronDown, Menu, X, ShoppingCart, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // Mobile menu
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Shop dropdown
  const [searchText, setSearchText] = useState("");

  return (
    <header className="bg-white shadow-md px-6 py-4 relative">
      <div className="flex items-center justify-between">
        {/* Left Section: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex items-center text-3xl font-extrabold uppercase text-black">
            SHOP.CO
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium relative">
          {/* Shop with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600">
              Shop <ChevronDown size={16} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                  Home
                </a>
                <a href="/cart" className="block px-4 py-2 hover:bg-gray-100">
                  Cart
                </a>
                <a
                  href="/category/electronics"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Category
                </a>
                <a href="/checkout" className="block px-4 py-2 hover:bg-gray-100">
                  Checkout
                </a>
                <a
                  href="/product/1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Product Detail
                </a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-blue-600">
            On Sale
          </a>
          <a href="#" className="hover:text-blue-600">
            New Arrival
          </a>
          <a href="#" className="hover:text-blue-600">
            Brand
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search (hidden on small screens) */}
          <div className="relative hidden sm:block">
            {searchText.length === 0 && (
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            )}

            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              placeholder="Search for item..."
              className="pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Cart & Profile */}
          <ShoppingCart size={24} className="text-gray-700 cursor-pointer" />
          <User size={24} className="text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
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
              <a href="/" className="py-1 hover:text-blue-600">
                Home
              </a>
              <a href="/cart" className="py-1 hover:text-blue-600">
                Cart
              </a>
              <a href="/category/electronics" className="py-1 hover:text-blue-600">
                Category
              </a>
              <a href="/checkout" className="py-1 hover:text-blue-600">
                Checkout
              </a>
              <a href="/product/1" className="py-1 hover:text-blue-600">
                Product Detail
              </a>
            </div>
          )}

          <a href="#" className="px-4 py-2 hover:text-blue-600">
            On Sale
          </a>
          <a href="#" className="px-4 py-2 hover:text-blue-600">
            New Arrival
          </a>
          <a href="#" className="px-4 py-2 hover:text-blue-600">
            Brand
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
