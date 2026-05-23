import React from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { useEffect } from 'react';

function BestSeller() {
    const { productsItems } = React.useContext(ShopContext);
    const [bestSellerProducts, setBestSellerProducts] = React.useState([]);


    useEffect(() => {
      const bestSellers = productsItems.filter(product => product.bestseller);
      setBestSellerProducts(bestSellers.slice(0, 4));
    }, [productsItems]);
    

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1="Best" text2="Sellers" para="Discover our
       newest arrivals and exclusive pieces and Collection  newest arrivals  and  pieces" />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          bestSellerProducts.map((product, index) => (
            <ProductItem key={index}
            id={product._id}
            title={product.name} 
            price={product.price} 
            image={product.image} />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller