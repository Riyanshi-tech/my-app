// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getProducts } from "../data/products";

// const ProductDetail = () => {
//   const { id } = useParams(); // 👈 read id from URL
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
// const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const data = await getProducts();
//       const found = data.find((p) => p.id === parseInt(id)); // find by id
//       setProduct(found);
//       setLoading(false);
//     };
//     fetchProduct();
//   }, [id]);

//   if (loading) {
//     return <p className="text-center mt-10">Loading product details...</p>;
//   }

//   if (!product) {
//     return <p className="text-center mt-10 text-red-500">Product not found.</p>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-10">
//       <img
//         src={product.image || product.img}
//         alt={product.title || product.name}
//         className="w-full md:w-1/2 h-80 object-contain border rounded-lg"
//       />

//       <div className="flex-1">
//         <h1 className="text-3xl font-bold mb-2">
//           {product.title || product.name}
//         </h1>
//         <p className="text-gray-600 mb-4">{product.description}</p>
//         <p className="text-2xl font-semibold mb-6">${product.price}</p>

//         <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../data/products"; // your Axios fetch function
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useCart } from "../components/cartContext"; // ✅ import hook

const ProductDetail = () => {
  const { id } = useParams(); // get product ID from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // ✅ get addToCart function

  // Fetch the product details on component mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts();
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found || null);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading)
    return <p className="text-center mt-10">Loading product details...</p>;
  if (!product)
    return <p className="text-center mt-10 text-red-500">Product not found.</p>;

  const handleAddToCart = () => {
    addToCart(product); // ✅ add product to cart
    navigate("/cart"); // ✅ optional: go to cart page immediately
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-gray-700 mb-6 hover:text-gray-900"
      >
        <AiOutlineArrowLeft size={20} />
        <span>Back</span>
      </button>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.image || product.img}
          alt={product.title || product.name}
          className="w-full md:w-1/2 h-80 object-contain border rounded-lg"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">
            {product.title || product.name}
          </h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-6">${product.price}</p>

          <button
            onClick={handleAddToCart} // ✅ connect button
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
