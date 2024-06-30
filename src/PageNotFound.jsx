import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function PageNotFound() {
  const isLoggedIn = useSelector((state) => state.user.loggedIn);
console.log('islogin' , isLoggedIn);
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-center mb-4">
          The page you are looking for does not exist.
        </p>
        <div className="flex justify-center">
          {isLoggedIn ? (
            <Link
              to="/"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Go to Home
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Go to Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
