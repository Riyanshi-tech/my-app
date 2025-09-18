import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black px-8 py-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* 1st Div (Newsletter section) */}
        <div className="grid grid-cols-1 bg-black md:grid-cols-5 gap-6 items-center">
          {/* Left (larger) */}
          <div className="md:col-span-3 ml-6">
  <h2 className="text-3xl font-extrabold mb-2 text-white">
    STAY UPTO DATE ABOUT OUR LATEST OFFERS
  </h2>
  
</div>


          {/* Right (smaller) */}
          <div className="md:col-span-2 flex flex-col  items-center justify-center gap-3 h-full py-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* <Button className="px-4 py-3 bg-white hover:bg-blue-700 rounded-md font-semibold">
              Subscribe to newsletter
            </Button> */}
          </div>
          <br />
        </div>

        {/* 2nd Div (Links / other footer content) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
  {/* Column 1 */}
  <div>
    <h3 className="text-xl font-bold mb-3">SHOP.CO</h3>
    <p className="text-gray-400">
      The best place to find clothes that match your style.
    </p>
  </div>

  {/* Column 2 */}
  <div>
    <h4 className="font-semibold mb-3">Shop</h4>
    <ul className="space-y-2 text-gray-400">
      <li>On Sale</li>
      <li>New Arrivals</li>
      <li>Brands</li>
    </ul>
  </div>

  {/* Column 3 */}
  <div>
    <h4 className="font-semibold mb-3">Support</h4>
    <ul className="space-y-2 text-gray-400">
      <li>Contact Us</li>
      <li>FAQ</li>
      <li>Returns</li>
    </ul>
  </div>

  {/* Column 4 */}
  <div>
    <h4 className="font-semibold mb-3">Help</h4>
    <ul className="space-y-2 text-gray-400">
      <li>Order Tracking</li>
      <li>Size Guide</li>
      <li>Shipping Info</li>
    </ul>
  </div>

  {/* Column 5 */}
  <div>
    <h4 className="font-semibold mb-3">Resources</h4>
    <ul className="space-y-2 text-gray-400">
      <li>Blog</li>
      <li>Privacy Policy</li>
      <li>Terms & Conditions</li>
    </ul>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
