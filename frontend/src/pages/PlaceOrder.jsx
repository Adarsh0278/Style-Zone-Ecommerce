import React, { useState } from 'react';
import Title from '../components/Title';

function PlaceOrder() {
  // 1. State for form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  // 2. State for payment method selection
  const [paymentMethod, setPaymentMethod] = useState('cod'); // Default to Cash on Delivery

  // 3. Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 4. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the final order object
    const orderData = {
      customerDetails: formData,
      paymentMethod: paymentMethod,
      orderTotal: 170.00, // Typically this would come from a Cart Context or props
    };

    console.log("Order Placed:", orderData);
    alert("Order successfully placed! Check the console for details.");
    
    // Add your API call here (e.g., fetch('/api/orders', ...))
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* ------------------ Left Side: Delivery Information ------------------ */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-lg sm:text-xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input 
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
            type="text" 
            placeholder="First name" 
          />
          <input 
            required
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
            type="text" 
            placeholder="Last name" 
          />
        </div>

        <input 
          required
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
          type="email" 
          placeholder="Email address" 
        />
        <input 
          required
          name="street"
          value={formData.street}
          onChange={handleInputChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
          type="text" 
          placeholder="Street" 
        />

        <div className="flex gap-3">
          <input 
            required
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
            type="text" 
            placeholder="City" 
          />
          <input 
            required
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
            type="text" 
            placeholder="State" 
          />
        </div>

        <div className="flex gap-3">
          <input 
            required
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
            type="number" 
            placeholder="Zipcode" 
          />
          <input 
            required
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
            type="text" 
            placeholder="Country" 
          />
        </div>

        <input 
          required
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
          type="number" 
          placeholder="Phone" 
        />
      </div>

      {/* ------------------ Right Side: Cart Totals & Payment ------------------ */}
      <div className="mt-8 text-lg min-w-full sm:min-w-[400px] sm:mt-0">
        
        {/* Cart Totals UI */}
        <div className="text-2xl mb-4">
          <Title text1={"CART"} text2={"TOTALS"} />
        </div>
        
        <div className="flex flex-col gap-2 mt-4 text-sm">
          <div className="flex justify-between border-b pb-2">
            <p>Subtotal</p>
            <p>$ 160.00</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p>Shipping Fee</p>
            <p>$ 10.00</p>
          </div>
          <div className="flex justify-between font-bold text-base pt-2">
            <p>Total</p>
            <p>$ 170.00</p>
          </div>
        </div>

        {/* Payment Method UI */}
        <div className="mt-12">
          <div className="text-xl mb-4">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
          </div>

          <div className="flex gap-3 flex-col lg:flex-row">
            {/* Stripe Option */}
            <div 
              onClick={() => setPaymentMethod('stripe')} 
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p className="min-w-3.5 h-3.5 border border-gray-300 rounded-full flex items-center justify-center">
                {paymentMethod === 'stripe' && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
              </p>
              <span className="text-indigo-600 font-bold tracking-wider text-sm">stripe</span>
            </div>

            {/* Razorpay Option */}
            <div 
              onClick={() => setPaymentMethod('razorpay')} 
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p className="min-w-3.5 h-3.5 border border-gray-300 rounded-full flex items-center justify-center">
                {paymentMethod === 'razorpay' && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
              </p>
              <span className="text-blue-900 font-bold italic tracking-tight text-sm">Razorpay</span>
            </div>

            {/* Cash on Delivery Option */}
            <div 
              onClick={() => setPaymentMethod('cod')} 
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p className="min-w-3.5 h-3.5 border border-gray-300 rounded-full flex items-center justify-center">
                {paymentMethod === 'cod' && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
              </p>
              <p className="text-gray-500 text-xs font-medium">CASH ON DELIVERY</p>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="w-full text-end mt-8">
            <button 
              type="submit" 
              className="bg-black text-white px-10 py-3 text-sm uppercase font-medium hover:bg-gray-800 transition"
            >
              Place Order
            </button>
          </div>
          
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;