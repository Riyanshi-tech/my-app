import React from "react";
import Button from "../components/Button";
import sampleImage from "../assets/images/photo.png"; // replace with your image
import starimage from "../assets/images/Vector.png";
import versace from "../assets/images/Group.png";
import zara from "../assets/images/zara-logo-1 1.png";
import prada from "../assets/images/prada-logo-1 1.png";
import gucci from "../assets/images/gucci-logo-1 1.png";
import calvinklein from "../assets/images/Group (1).png";
import ProductList from "../components/CartItem";
import TestimonialsSlider from "../components/Testimonial";

const Home = () => {
  const dressStyles = [
    { name: "Casual", img: sampleImage },
    { name: "Formal", img: sampleImage },
    { name: "Party", img: sampleImage },
    { name: "Gym", img: sampleImage },
  ];

  const products = [
    {
      category: "top_selling",
      id: 1,
      name: "Nike Air Sneakers",
      price: 120,
      rating: 4.5,
      img: "./assets/shoe3.jpg",
    },
    {
      category: "top_selling",
      id: 2,
      name: "Adidas Running Shoes",
      price: 95,
      rating: 4.2,
      img: "./assets/shoe3.jpg",
    },
    {
      category: "top_selling",
      id: 2,
      name: "Adidas Running Shoes",
      price: 95,
      rating: 4.2,
      img: "./assets/shoe3.jpg",
    },
    {
      category: "new_arrival",
      id: 3,
      name: "Puma Sports Shoes",
      price: 110,
      rating: 4.0,
      img: "./assets/shoe3.jpg",
    },
    {
      category: "new_arrival",
      id: 4,
      name: "Reebok Classic",
      price: 130,
      rating: 4.8,
      img: "./assets/shoe4.jpg",
    },
    {
      category: "new_arrival",
      id: 5,
      name: "Converse All Star",
      price: 85,
      rating: 4.3,
      img: "./assets/shoe5.jpg",
    },
  ];
  console.log(products);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-6xl px-5">
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          {/* Button */}
          <div className="flex gap-4">
            <Button title={"Shop Now"} dark={false} />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap  items-center gap-8 text-center my-8">
            <div>
              <h1 className="font-extrabold text-3xl">200+</h1>
              <p className="text-gray-600">International brands</p>
            </div>
            <div>
              <h1 className="font-extrabold text-3xl">2,000+</h1>
              <p className="text-gray-600">High-Quality products</p>
            </div>
            <div>
              <h1 className="font-extrabold text-3xl">30,000</h1>
              <p className="text-gray-600">Happy customers</p>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="relative flex items-center justify-center w-full">
          {/* Star images */}
          <img
            src={starimage}
            alt="star"
            className="absolute top-70 left-10 w-8 h-8"
          />
          <img
            src={starimage}
            alt="star"
            className="absolute top-12 right-8 w-14 h-14"
          />

          {/* Main fashion image */}
          <img
            src={sampleImage}
            alt="Fashion"
            className="rounded-lg shadow-lg w-full md:w-full max-w-xl object-cover"
          />
        </div>
      </div>

      {/* ✅ New section BELOW the grid */}
      <div
        className="w-full grid grid-cols-3 gap-6 rounded bg-black p-6 text-center 
                md:flex md:justify-between md:gap-8"
      >
        <img src={versace} alt="" />
        <img src={zara} alt="" />
        <img src={gucci} alt="" />
        <img src={prada} alt="" />
        <img src={calvinklein} alt="" />
      </div>
      <div className="App p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">NEW ARRIVAL </h1>
        <ProductList
          data={products.filter((item) => item.category === "top_selling")}
        />
      </div>
      <div className="App p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">TOP SELLING</h1>
        <ProductList
          data={products.filter((item) => item.category === "new_arrival")}
        />
      </div>
      <div class="max-w-[1000px] mx-auto my-10 text-center font-sans">
        <div className="w-full max-w-6xl py-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {dressStyles.map((style, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={style.img}
                  alt={style.name}
                  className="w-full h-[220px] object-cover rounded-xl block"
                />
                <span className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-md font-semibold text-[16px]">
                  {style.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TestimonialsSlider/>
    </div>
  );
};

export default Home;
