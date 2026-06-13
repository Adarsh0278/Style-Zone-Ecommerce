import React from 'react';
import Title from '../components/Title';

function PlaceOrder() {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      
      {/* ------------------ Left Side: Delivery Information ------------------ */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-lg sm:text-xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" defaultValue="John" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" defaultValue="Doe" />
        </div>

        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address" defaultValue="demo@example.com" />
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" defaultValue="123 Main St" />

        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" defaultValue="New York" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" defaultValue="NY" />
        </div>

        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode" defaultValue="10001" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" defaultValue="USA" />
        </div>

        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" defaultValue="1234567890" />
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
            <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className="min-w-3.5 h-3.5 border border-gray-300 rounded-full"></p>
              <span className="text-indigo-600 font-bold tracking-wider text-sm">stripe</span>
            </div>

            {/* Razorpay Option */}
            <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className="min-w-3.5 h-3.5 border border-gray-300 rounded-full"></p>
              <span className="text-blue-900 font-bold italic tracking-tight text-sm">Razorpay</span>
            </div>

            {/* Cash on Delivery Option (Selected State) */}
            <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className="min-w-3.5 h-3.5 border border-gray-300 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              </p>
              <p className="text-gray-500 text-xs font-medium">CASH ON DELIVERY</p>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="w-full text-end mt-8">
            <button className="bg-black text-white px-10 py-3 text-sm uppercase font-medium hover:bg-gray-800 transition">
              Place Order
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;