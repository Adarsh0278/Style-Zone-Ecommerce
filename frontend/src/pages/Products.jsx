// src/pages/Products.jsx

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

function Products() {
  const { productId } = useParams()

  const [productData, setProductData] = useState(null)
  const [mainImage, setMainImage] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [activeTab, setActiveTab] = useState('description')
  const {productsItems, addItemToCart} = useContext(ShopContext)
  const { addToCart } = useContext(ShopContext)

  useEffect(() => {
    if (productsItems && productsItems.length > 0) {
      const product = productsItems.find((item) => item._id === productId)

      if (product) {
        setProductData(product)
        setMainImage(product.image[0])
      }
    }
  }, [productId, productsItems])

  if (!productData) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    )
  }

  // Fallback sizes if not provided in your product data schema
  const sizes = productData.sizes || ['S', 'M', 'L', 'XL', 'XXL']

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      
      {/* ----------------- Top Section: Product Details ----------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        
        {/* Product Images Section */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* Thumbnails */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full hide-scrollbar">
            {productData.image.map((img, index) => (
              <img
                key={index}
                onClick={() => setMainImage(img)}
                src={img}
                alt={`${productData.name} thumbnail ${index + 1}`}
                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer object-cover border ${
                  mainImage === img ? 'border-gray-800' : 'border-gray-200 hover:border-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[80%]">
            <img 
              src={mainImage} 
              alt={productData.name} 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex-1 mt-2 sm:mt-0">
          <h1 className="font-medium text-2xl text-gray-900 mt-2">
            {productData.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <div className="flex text-[#ff5722] text-sm">
              ★★★★<span className="text-gray-300">★</span>
            </div>
            <p className="text-sm text-gray-800 pl-2">(122)</p>
          </div>

          {/* Price */}
          <p className="mt-5 text-3xl font-medium text-gray-900">
            ${productData.price}
          </p>

          {/* Short Description */}
          <p className="mt-5 text-gray-500 md:w-4/5 text-sm leading-relaxed">
            A lightweight, usually knitted, pullover shirt, close-fitting and with a
            round neckline and short sleeves, worn as an undershirt or outer
            garment.
          </p>

          {/* Size Selector */}
          <div className="flex flex-col gap-4 mt-8">
            <p className="text-sm font-medium text-gray-900">Select Size</p>
            <div className="flex gap-2">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`border py-2 px-4 bg-gray-50 text-sm font-medium transition-colors ${
                    selectedSize === size ? 'border-gray-800 bg-gray-200' : 'border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-black text-white px-8 py-3 text-sm font-medium active:bg-gray-700 mt-8 transition-colors"
          onClick={() => addToCart(productData._id, selectedSize)}
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5 border-gray-200" />

          {/* Policies */}
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ----------------- Bottom Section: Tabs ----------------- */}
      <div className="mt-20">
        <div className="flex">
          <button 
            onClick={() => setActiveTab('description')}
            className={`border px-5 py-3 text-sm ${activeTab === 'description' ? 'font-bold border-b-0' : 'text-gray-500'}`}
          >
            Description
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`border px-5 py-3 text-sm ${activeTab === 'reviews' ? 'font-bold border-b-0' : 'text-gray-500'}`}
          >
            Reviews (122)
          </button>
        </div>
        
        <div className="border p-6 text-sm text-gray-500 leading-relaxed flex flex-col gap-4">
          {activeTab === 'description' ? (
            <>
              <p>
                An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
              </p>
              <p>
                E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
              </p>
            </>
          ) : (
            <p>Customer reviews will be displayed here.</p>
          )}
        </div>
      </div>

    </div>
  )
}

export default Products