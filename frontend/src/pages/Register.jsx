import React from 'react'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

function Register() {
  const log = "Register";

  return (
    <div>
      {/* Page Title */}
      <div className="text-lg sm:text-xl my-3">
        <Title text1={log} text2="" />
      </div>

      {/* Register Form */}
      <div className="flex flex-col items-center justify-center">
        <form className="flex flex-col items-center justify-center w-full sm:w-1/2">
          
          {/* Username Input */}
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
          />

          {/* Register Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600 transition duration-300"
          >
            {log}
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-4">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register