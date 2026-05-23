// OurPolicy.jsx

import React from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function OurPolicy() {
  return (

    <div className="py-20">

      {/* Policies Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">

        {/* Policy 1 */}
        <div className="flex flex-col items-center">

          <FaExchangeAlt className="text-5xl mb-5 text-black" />

          <h3 className="text-lg font-semibold text-gray-800">
            Easy Exchange Policy
          </h3>

          <p className="text-gray-500 mt-2">
            We offer hassle free exchange policy
          </p>

        </div>

        {/* Policy 2 */}
        <div className="flex flex-col items-center">

          <MdVerified className="text-5xl mb-5 text-black" />

          <h3 className="text-lg font-semibold text-gray-800">
            7 Days Return Policy
          </h3>

          <p className="text-gray-500 mt-2">
            We provide 7 days free return policy
          </p>

        </div>

        {/* Policy 3 */}
        <div className="flex flex-col items-center">

          <CgProfile className="text-5xl mb-5 text-black" />

          <h3 className="text-lg font-semibold text-gray-800">
            Best customer support
          </h3>

          <p className="text-gray-500 mt-2">
            We provide 24/7 customer support
          </p>

        </div>

      </div>

      {/* Newsletter Section */}
      <div className="mt-28 text-center">

        <h2 className="text-3xl font-semibold text-gray-900">
          Subscribe now & get 20% off
        </h2>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Input + Button */}
        <form className="flex flex-col sm:flex-row items-center justify-center mt-10 max-w-3xl mx-auto border border-gray-300 overflow-hidden">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-4 outline-none text-gray-700"
          />

          <button
            type="submit"
            className="bg-black text-white px-10 py-4 w-full sm:w-auto hover:bg-gray-800 transition-all duration-300"
          >
            SUBSCRIBE
          </button>

        </form>

      </div>

    </div>
  );
}

export default OurPolicy;