import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProducts();
      const found = data.find((p) => p.id === parseInt(id));
      if (found) setProduct(found);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      <img
        src={product.image || product.img}
        alt={product.title || product.name}
        className="w-full md:w-1/2 h-96 object-cover rounded"
      />
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">
          {product.title || product.name}
        </h1>
        <p className="text-gray-600 mb-2">Category: {product.category}</p>
        <p className="text-xl font-semibold mb-4">${product.price}</p>
        <button className="w-full md:w-auto bg-black text-white py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
