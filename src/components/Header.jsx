import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  ShoppingCart,
  User,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Mock product data (you can replace with API or context)
  const products = [
    { id: 1, name: "Classic White T-Shirt" },
    { id: 2, name: "Black Denim Jacket" },
    { id: 3, name: "Cotton Hoodie" },
    { id: 4, name: "Slim Fit Jeans" },
    { id: 5, name: "Leather Jacket" },
  ];

  // Filter products by search
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="bg-white shadow-md px-6 py-4 relative">
      <div className="flex items-center justify-between">
        {/* Left Section */}
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

        {/* Center Navigation */}
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

        {/* Right Section - Search, Cart, Profile */}
        <div className="flex items-center gap-4 relative">
          {/* Search Bar */}
          <div className="relative">
            <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
              <Search size={18} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none w-48 md:w-64 text-sm"
              />
            </div>

            {/* Search Suggestions */}
            {searchTerm && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${item.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setSearchTerm("")}
                    >
                      {item.name}
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-2 text-sm text-gray-500">
                    No results found
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Icons */}
          <ShoppingCart size={24} className="text-gray-700 cursor-pointer" />
          <User size={24} className="text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 text-gray-700">
          <Link to="/" className="px-4 py-2 hover:text-blue-600">
            Home
          </Link>
          <Link to="/cart" className="px-4 py-2 hover:text-blue-600">
            Cart
          </Link>
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
