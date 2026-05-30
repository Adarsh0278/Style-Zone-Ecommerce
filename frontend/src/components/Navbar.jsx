import React, { useState } from 'react'
import { IoSearch, IoClose } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setSearchResults } = useContext(ShopContext);

  const navLinks = [
    { name: "HOME", path: "/" }, 
    { name: "COLLECTION", path: "/collection" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (

    <header className='sticky top-0 z-50 bg-white [box-shadow:0_4px_6px_-4px_rgba(0,0,0,0.1)]'>

      <div className='max-w-7xl mx-auto flex items-center justify-between py-4 px-6'>

        {/* Logo */}
        <Link to='/'>
          <img
            src={assets.logo}
            alt="Logo"
            className='w-14 object-contain cursor-pointer'
          />
        </Link>

        {/* Desktop Nav */}
        <ul className='hidden sm:flex gap-8 text-sm text-gray-700 font-medium'>

          {
            navLinks.map((link) => (

              <NavLink
                key={link.name}
                to={link.path}
                className='flex flex-col items-center gap-1 group'
              >

                <p className='hover:text-black transition duration-300'>
                  {link.name}
                </p>

                <hr className='w-0 group-hover:w-2/4 transition-all duration-300 border-none h-[2px] bg-black' />

              </NavLink>

            ))
          }

        </ul>

        {/* Right Icons */}
        <div className='flex items-center gap-6 text-gray-700'>

          {/* Search */}
          <IoSearch onClick={() => setSearchResults(true)} className='text-2xl cursor-pointer hover:text-black transition' />

          {/* Profile Dropdown */}
          <div className='group relative'>

            <CgProfile className='text-2xl cursor-pointer hover:text-black transition' />

            <div className='absolute right-0 pt-4 hidden group-hover:block z-50'>

              <div className='flex flex-col w-40 py-3 bg-white shadow-xl rounded-lg border border-gray-100 text-sm text-gray-600 overflow-hidden'>

                <Link
                  to='/profile'
                  className='px-4 py-2 hover:bg-gray-100 hover:text-black transition'
                >
                  Profile
                </Link>

                <Link
                  to='/orders'
                  className='px-4 py-2 hover:bg-gray-100 hover:text-black transition'
                >
                  Orders
                </Link>

                <button className='text-left px-4 py-2 hover:bg-gray-100 hover:text-red-500 transition'>
                  Logout
                </button>

              </div>

            </div>

          </div>

          {/* Cart */}
          <Link to='/cart' className='relative'>

            <FiShoppingCart className='text-2xl cursor-pointer hover:text-black transition' />

            <span className='absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center'>
              2
            </span>

          </Link>

          {/* Mobile Menu Icon */}
          <RiMenu3Fill
            onClick={() => setIsMenuOpen(true)}
            className='text-3xl cursor-pointer sm:hidden'
          />

        </div>

      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'w-64' : 'w-0'
          }`}
      >

        {/* Sidebar Header */}
        <div className='flex items-center justify-between p-5 border-b'>

          <h2 className='text-lg font-semibold'>
            Menu
          </h2>

          <IoClose
            onClick={() => setIsMenuOpen(false)}
            className='text-3xl cursor-pointer'
          />

        </div>

        {/* Mobile Links */}
        <div className='flex flex-col p-5 text-gray-700 font-medium'>

          {
            navLinks.map((link) => (

              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className='py-3 border-b hover:text-black transition'
              >
                {link.name}
              </NavLink>

            ))
          }

        </div>

      </div>

    </header>

  )
}

export default Navbar