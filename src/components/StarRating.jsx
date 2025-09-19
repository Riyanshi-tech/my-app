import React from "react";

const StarRating = ({ rating, maxStars = 5 }) => {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: maxStars }, (_, i) => (
        <img
          key={i}
          src={i < rating ? "/star-filled.png" : "/star-empty.png"} 
          alt="star"
          style={{ width: 24, height: 24 }}
        />
      ))}
    </div>
  );
};

export default StarRating;