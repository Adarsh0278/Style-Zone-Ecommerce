import React from "react";
import Title from "../components/Title";

function Contact() {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-16">

      {/* Title */}
      <div className="flex items-center justify-center gap-3 mb-16">
        <Title text1="Contact " text2="Us" />

      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center">

        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
            alt="contact"
            className="w-full h-[70vh] rounded-sm"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-gray-600">

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Store
          </h2>

          <p className="leading-8">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>

          <div className="mt-6 leading-8">
            <p>Tel: (415) 555-0132</p>
            <p>Email: admin@stylezone.com</p>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Careers at StyleZone
            </h2>

            <p className="leading-8">
              Learn more about our teams and job openings.
            </p>

            <button className="mt-8 border border-black px-8 py-4 hover:bg-black hover:text-white transition duration-300">
              Explore Jobs
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;