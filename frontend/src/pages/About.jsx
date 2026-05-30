import React from "react";
import Title from "../components/Title";

function About() {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-12">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <Title text1="About " text2="Us" />

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Welcome to Style Zone Ecommerce — your one-stop destination for
          trendy fashion, premium quality products, and affordable prices.
        </p>
      </div>

      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop"
            alt="About Style Zone"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-7 mb-4">
            Style Zone is a modern ecommerce platform built with the MERN stack.
            Our goal is to provide customers with the latest fashion products
            while delivering a smooth and secure online shopping experience.
          </p>

          <p className="text-gray-600 leading-7 mb-4">
            We focus on quality, customer satisfaction, and fast delivery. From
            stylish clothing to trending accessories, we carefully select every
            product to ensure the best shopping experience for our users.
          </p>

          <p className="text-gray-600 leading-7">
            This project is designed to improve real-world ecommerce skills
            using technologies like React, Node.js, Express.js, MongoDB, and
            Tailwind CSS.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        
        <div className="border p-6 rounded-xl shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Premium Quality
          </h3>

          <p className="text-gray-600">
            We provide high-quality fashion products with modern and trending
            styles.
          </p>
        </div>

        <div className="border p-6 rounded-xl shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Fast Delivery
          </h3>

          <p className="text-gray-600">
            Quick and secure delivery service to ensure the best customer
            experience.
          </p>
        </div>

        <div className="border p-6 rounded-xl shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Secure Payment
          </h3>

          <p className="text-gray-600">
            Safe and trusted payment methods for smooth online transactions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;