import React from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { useEffect } from 'react';

function LatestCollection() {
    const { productsItems } = React.useContext(ShopContext);
    const [latestProducts, setLatestProducts] = React.useState([]);

    useEffect(() => {
      setLatestProducts(productsItems.slice(0, 12)); // Assuming productsItems is an array of products
    }, [productsItems]);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1="Latest" text2="Collection" para="Discover our
       newest arrivals and exclusive pieces and Collection  newest arrivals  and  pieces" />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          latestProducts.map((product, index) => (
            <ProductItem key={index}
            id={product.id}
            title={product.title} 
            price={product.price} 
            image={product.image} />
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection