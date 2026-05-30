import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FiSearch, FiX } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const {
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
  } = useContext(ShopContext);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Keep search UI controlled by `searchResults`. When user performs a search
  // from a page that doesn't support filtering, navigate to `/products` to
  // show results there.
  const handleSearch = () => {
    if (!location.pathname.includes('collection') && !location.pathname.includes('products')) {
      navigate('/products');
    }
    setSearchResults(true);
  };

  return searchResults ? (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-gray-200">
        
        <div className="flex items-center gap-3">
          
          {/* Search Input */}
          <div className="flex flex-1 items-center bg-g thin:ring-2 focus-within:ring-blue-500 transition-all">
            <FiSearch className="text-gray-500 text-xl" />

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent outline-none ml-3 text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className=" rounded-xl font-medium  active:scale-95 transition-all duration-200 "
          >
            Search
          </button>

          {/* Close Button */}
          <button
            onClick={() => {
              setSearchResults(false);
              setSearchTerm('');
            }}
          >
            <FiX size={20} />
          </button>

        </div>

      </div>
    </div>
  ) : null;
};

export default SearchBar;