// src/pages/Collection.jsx

import React from "react";
import Title from "../components/Title";
import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";


function Collection() {

  const {productsItems} = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selectedTypes, setSelectedTypes] = React.useState([]);
  const [sortBy, setSortBy] = React.useState('relevant');
  const [showFilters, setShowFilters] = React.useState(false);

  useEffect(() => {
    let products = [...productsItems];

    // Apply category filter
    if (selectedCategories.length > 0) {
      products = products.filter(p => selectedCategories.includes(p.category));
    }

    // Apply type filter
    if (selectedTypes.length > 0) {
      products = products.filter(p => selectedTypes.includes(p.type));
    }

    // Apply sorting
    if (sortBy === 'low-to-high') {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-to-low') {
      products.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(products);
  }, [productsItems, selectedCategories, selectedTypes, sortBy]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleType = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-10 pt-10 border-t">
      
      {/* MOBILE FILTER TOGGLE */}
      <div className="sm:hidden flex justify-between items-center mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-lg font-medium"
        >
          {showFilters ? '✕ HIDE FILTERS' : '☰ SHOW FILTERS'}
        </button>
      </div>

      {/* LEFT SIDE FILTER */}
      <div className={`${showFilters ? 'block' : 'hidden'} sm:block sm:min-w-60`}>
        <p className="text-2xl font-medium mb-8">FILTERS</p>

        {/* Categories */}
        <div className="border border-gray-300 pl-5 py-5 mb-6">
          <p className="mb-4 text-sm font-medium">CATEGORIES</p>

          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes('Men')}
                onChange={() => toggleCategory('Men')}
              />
              Men
            </label>

            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes('Women')}
                onChange={() => toggleCategory('Women')}
              />
              Women
            </label>

            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes('Kids')}
                onChange={() => toggleCategory('Kids')}
              />
              Kids
            </label>
          </div>
        </div>

        {/* Type */}
        <div className="border border-gray-300 pl-5 py-5">
          <p className="mb-4 text-sm font-medium">TYPE</p>

          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes('Topwear')}
                onChange={() => toggleType('Topwear')}
              />
              Topwear
            </label>

            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes('Bottomwear')}
                onChange={() => toggleType('Bottomwear')}
              />
              Bottomwear
            </label>

            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes('Winterwear')}
                onChange={() => toggleType('Winterwear')}
              />
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* MIDDLE SIDE */}
      <div className="flex-1">
        
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          
          <Title text1="ALL " text2="COLLECTIONS" />

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2 py-1 rounded"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-to-high">Sort by: Low to High</option>
            <option value="high-to-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index}>
              <ProductItem
                id={product._id}
                title={product.name}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
        </div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No products found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collection;