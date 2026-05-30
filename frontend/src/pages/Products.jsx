import React, { useContext, useEffect } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'

function Products() {
  const { productsItems, searchTerm } = useContext(ShopContext)
  const [filteredProducts, setFilteredProducts] = React.useState([])

  useEffect(() => {
    let products = [...productsItems]

    if (searchTerm.trim() !== '') {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProducts(products)
  }, [productsItems, searchTerm])

  return (
    <div className="pt-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <Title text1="ALL " text2="PRODUCTS" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product._id}>
            <ProductItem
              id={product._id}
              title={product.name}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No products found. Try a different search.</p>
        </div>
      )}
    </div>
  )
}

export default Products