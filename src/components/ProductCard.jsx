import Button from './Button'
// export default ProductList
const ProductCard= (props) => {
    

  return (
    <div className="product-card border rounded-lg shadow-md p-4 max-w-xs">
      {/* Image Row */}
      <div className="product-image mb-4">
        <img 
          src={props.img} 
          alt={props.name} 
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      {/* Name Row */}
      <div className="product-name font-bold text-lg mb-2">
        {props.name}
      </div>

      {/* Rating Row */}
      <div className="product-rating text-yellow-500 mb-2">
        ⭐ {props.rating} / 5
      </div>

      {/* Price Row */}
      <div className="product-price text-green-600 font-semibold text-xl">
        ${props.price}
      </div>
      <Button title={"Shop Now"} dark={false} />
    </div>
  );
};

export default ProductCard;