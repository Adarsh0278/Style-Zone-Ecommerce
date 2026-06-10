import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { productsItems, currency, deliveryFee, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  // Restructure the nested cartItems object into a simple array for clean rendering
  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  // Calculate Subtotal dynamically
  const getSubtotal = () => {
    let subtotal = 0;
    cartData.forEach((item) => {
      const productInfo = productsItems.find((p) => p._id === item._id);
      if (productInfo) {
        subtotal += productInfo.price * item.quantity;
      }
    });
    return subtotal;
  };

  const subtotal = getSubtotal();

  return (
    <div className="border-t pt-14">
      {/* Title Section */}
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {/* Cart Items List */}
      <div>
        {cartData.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl font-medium">Your cart is empty</p>
            <button 
              onClick={() => navigate('/collection')} 
              className="mt-4 bg-black text-white px-6 py-2 text-sm uppercase font-medium hover:bg-gray-800 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          cartData.map((item, index) => {
            // Match stored ID with actual product data
            const productData = productsItems.find((p) => p._id === item._id);

            if (!productData) return null;

            return (
              <div 
                key={index} 
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                {/* Product Info (Image, Title, Price, Size) */}
                <div className="flex items-start gap-6">
                  <img 
                    src={productData.image[0]} 
                    alt={productData.name} 
                    className="w-16 sm:w-20 object-cover"
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium text-gray-900">{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2 text-sm text-gray-600">
                      <p>{currency}{productData.price}</p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 font-semibold">{item.size}</p>
                    </div>
                  </div>
                </div>

                {/* Quantity Editor Input */}
                <input 
                  type="number" 
                  min={1} 
                  defaultValue={item.quantity} 
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value > 0) {
                      updateQuantity(item._id, item.size, value);
                    }
                  }}
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-center outline-none rounded"
                />

                {/* Remove Item Button */}
                <FiTrash2 
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-5 h-5 cursor-pointer text-gray-400 hover:text-red-500 transition-colors justify-self-center sm:justify-self-end"
                />
              </div>
            );
          })
        )}
      </div>

      {/* Checkout and Order Summary Panel */}
      {cartData.length > 0 && (
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <div className="text-2xl">
              <Title text1={"CART"} text2={"TOTALS"} />
            </div>

            <div className="flex flex-col gap-2 mt-4 text-sm">
              <div className="flex justify-between border-b pb-2">
                <p>Subtotal</p>
                <p>{currency}{subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between border-b pb-2">
                <p>Shipping Fee</p>
                <p>{currency}{deliveryFee.toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-bold text-base pt-2">
                <p>Total</p>
                <p>{currency}{(subtotal + deliveryFee).toFixed(2)}</p>
              </div>
            </div>

            <div className="w-full text-end mt-8">
              <button 
                onClick={() => navigate('/place-order')}
                className="bg-black text-white text-sm my-8 px-8 py-3 uppercase font-medium hover:bg-gray-800 transition"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;