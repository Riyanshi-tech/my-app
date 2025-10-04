import React, { useState, useEffect } from "react";
import { getProducts } from "../data/products"; // Axios fetch function

const CategoryPage = () => {
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    color: "",
    maxPrice: 200,
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch products from API once component mounts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const data = await getProducts();
      console.log(data);

      // Optional: add size/color for filters if API doesn't provide
      const enriched = data.map((p) => ({
        ...p,
        size: ["S", "M", "L", "XL"][Math.floor(Math.random() * 4)],
        color: ["Black", "White", "Red", "Gray", "Blue"][
          Math.floor(Math.random() * 5)
        ],
        name: p.title || p.name,
        img: p.image || p.img,
        price: p.price,
        category: p.category,
      }));

      setProducts(enriched);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredProducts = products.filter((p) => {
    return (
      (!filters.category || p.category === filters.category) &&
      (!filters.size || p.size === filters.size) &&
      (!filters.color || p.color === filters.color) &&
      p.price <= filters.maxPrice
    );
  });

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <div className="flex gap-6 max-w-7xl mx-auto px-4 py-8">
      {/* Sidebar Filters */}
      <aside className="w-64 bg-gray-100 p-4 rounded-lg">
        <h2 className="font-bold mb-4">Filters</h2>

        {/* Category */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Category</label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">All</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>

        {/* Size */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Size</label>
          <select
            value={filters.size}
            onChange={(e) => handleFilterChange("size", e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        {/* Color */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Color</label>
          <select
            value={filters.color} // ✅ fixed
            onChange={(e) => handleFilterChange("color", e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">All</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Gray">Gray</option>
            <option value="Blue">Blue</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-2">
            Max Price: ${filters.maxPrice}
          </label>
          <input
            type="range"
            min="50"
            max="200"
            step="10"
            value={filters.maxPrice}
            onChange={(e) =>
              handleFilterChange("maxPrice", Number(e.target.value))
            }
            className="w-full"
          />
        </div>
      </aside>

      {/* Product Grid */}
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="font-semibold mt-2">{p.name}</h3>
              <p className="text-gray-600">${p.price}</p>
              <button className="mt-2 w-full bg-black text-white py-2 rounded">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;
