// Footer.jsx

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (

    <footer className="bg-white text-gray-700 mt-24 border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">

        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo + About */}
          <div>

            <h2 className="text-3xl font-bold text-black">
              STYLE ZONE
            </h2>

            <p className="mt-5 text-gray-500 leading-7">
              Text of the printing and
              g industry. try's
              standard  since the 1500s.
            </p>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-xl font-semibold text-black mb-5">
              COMPANY
            </h3>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="hover:text-black transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/collection" className="hover:text-black transition">
                  Collection
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-black transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-black transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Customer Service */}
          <div>

            <h3 className="text-xl font-semibold text-black mb-5">
              CUSTOMER SERVICE
            </h3>

            <ul className="space-y-3">

              <li className="hover:text-black transition cursor-pointer">
                Shipping Policy
              </li>

              <li className="hover:text-black transition cursor-pointer">
                Return Policy
              </li>

              <li className="hover:text-black transition cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-black transition cursor-pointer">
                Terms & Conditions
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-black mb-5">
              GET IN TOUCH
            </h3>

            <ul className="space-y-3 text-gray-500">

              <li>+91 9876543210</li>

              <li>support@stylezone.com</li>

              <li>India</li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 text-center text-sm text-gray-500">

          Copyright 2026 © StyleZone.com - All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;