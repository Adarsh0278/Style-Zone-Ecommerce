import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 text-center px-4 sm:px-0">
      
      {/* 404 Heading */}
      <h1 className="text-7xl sm:text-9xl font-bold text-gray-900 mb-4 tracking-tighter">
        404
      </h1>
      
      {/* Subheading */}
      <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 mb-4">
        Page Not Found
      </h2>
      
      {/* Helpful Text */}
      <p className="text-gray-500 mb-10 max-w-md text-sm sm:text-base leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      {/* Back to Home Button */}
      <Link 
        to="/" 
        className="bg-black text-white px-10 py-3 text-sm font-medium hover:bg-gray-800 active:bg-gray-700 transition-colors"
      >
        BACK TO HOME
      </Link>

    </div>
  )
}

export default NotFound