import { useCart } from "../components/cartContext";
import { AiOutlineDelete, AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* 🔙 Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-4 text-gray-600 hover:text-black"
      >
        <AiOutlineArrowLeft size={20} />
        <span>Back</span>
      </button>

      <h1 className="text-3xl font-extrabold mb-6">YOUR CART</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT: Cart Items */}
          <div className="md:col-span-2 bg-white border rounded-2xl p-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4 mb-4"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image || item.img}
                    alt={item.title || item.name}
                    className="w-20 h-20 object-contain rounded-lg border"
                  />
                  <div>
                    <p className="font-semibold">{item.title || item.name}</p>
                    <p className="text-gray-500 text-sm">Size: Large</p>
                    <p className="text-gray-500 text-sm">Color: White</p>
                    <p className="font-bold mt-1">${item.price}</p>
                  </div>
                </div>

                {/* Quantity + Delete */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-full px-3">
                    <button
                      className="text-lg px-2 hover:text-gray-700"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>
                    <span className="px-3 font-semibold">{item.quantity}</span>
                    <button
                      className="text-lg px-2 hover:text-gray-700"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <AiOutlineDelete size={22} />
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="bg-gray-900 text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-800"
            >
              Clear Cart
            </button>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="bg-white border rounded-2xl p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount (-20%)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Promo Code Input */}
            <div className="flex items-center mt-4 gap-2">
              <input
                type="text"
                placeholder="Add promo code"
                className="border rounded-full px-4 py-2 flex-grow outline-none"
              />
              <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800">
                Apply
              </button>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-full mt-5 flex items-center justify-center gap-2 hover:bg-gray-800">
              Go to Checkout →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
