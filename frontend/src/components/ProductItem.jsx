import React from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

function ProductItem({ id, title, price, image }) {

  const { currency } = React.useContext(ShopContext);

  return (

    <Link
      to={`/product/${id}`}
      className="text-gray-700 cursor-pointer group"
    >

      {/* Image Container */}
      <div className="overflow-hidden rounded-lg bg-gray-100">

        <img
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          src={image[0]}
          alt={title}
        />

      </div>

      {/* Product Title */}
      <h3 className="pt-3 text-sm md:text-base font-medium">
        {title}
      </h3>

      {/* Price */}
      <p className="pt-1 text-lg font-semibold text-gray-900">
        {currency}{price.toFixed(2)}
      </p>

    </Link>
  )
}

export default ProductItem