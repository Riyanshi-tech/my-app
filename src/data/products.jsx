// src/data/products.js
// const products = [
//   {
//     id: 1,
//     name: "Nike Air Sneakers",
//     category: "Casual",
//     size: "M",
//     color: "Black",
//     price: 120,
//     rating: 4.5,
//     img: "./assets/shoe3.jpg",
//   },
//   {
//     id: 2,
//     name: "Adidas Running Shoes",
//     category: "Casual",
//     size: "L",
//     color: "White",
//     price: 95,
//     rating: 4.2,
//     img: "./assets/shoe3.jpg",
//   },
//   {
//     id: 3,
//     name: "Puma Sports Shoes",
//     category: "Gym",
//     size: "M",
//     color: "Gray",
//     price: 110,
//     rating: 4.0,
//     img: "./assets/shoe3.jpg",
//   },
//   {
//     id: 4,
//     name: "Reebok Classic",
//     category: "Formal",
//     size: "S",
//     color: "Blue",
//     price: 130,
//     rating: 4.8,
//     img: "./assets/shoe4.jpg",
//   },
//   {
//     id: 5,
//     name: "Converse All Star",
//     category: "Party",
//     size: "XL",
//     color: "Red",
//     price: 85,
//     rating: 4.3,
//     img: "./assets/shoe5.jpg",
//   },
// ];

// export default products;
// src/data/products.js
import axios from "axios";

const API_URL =
  "https://taobao-api.p.rapidapi.com/api?api=item_search&page_size=40&sort=default&q=shoes";

export const getProducts = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data; // return the API data
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
};

