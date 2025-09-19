import React from 'react'
import ProductCard from './ProductCard'   // import your product card

const ProductList = (props) => {
  const data = props.data
console.log(data);

  // Example: filter and sort products
  const filterSort = data
    .filter((item) => item.price > 50)      // filter example (only products > $50)
    .sort((a, b) => a.price - b.price)      // sort by price ascending

  const listItem = filterSort.map((item, index) => {
    return (
      <ProductCard 
        key={index} 
        img={item.img}
        name={item.name}
        rating={item.rating}
        price={item.price}
      />
    )
  })

  return (
    <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {listItem}
    </div>
  )
}

export default ProductList
