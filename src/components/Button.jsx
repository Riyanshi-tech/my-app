import React from "react";

const Button = ({ title, dark, onClick, style }) => {
  return (
    <button
      className={`rounded-2xl h-12 px-6 ${
        !dark ? "bg-black text-white" : "bg-white text-black"
      } ${style}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
