import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Login = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg relative">
        <button
          onClick={goToHome}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
          aria-label="Close"
        >
          <IoMdClose size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Log In to Your Account
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Password"
            />
          </div>

          <button onClick={goToHome}
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Log In
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to='/signup' className="text-blue-500 hover:underline">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
