import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import backImage from "../assets/register.jpg";
import authImage from "../assets/authImage.png";
import { Link } from "react-router-dom";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };


  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col md:flex-row font-sans">
        {/* Left Panel */}
        <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-blue-700 to-blue-200 p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              SkillSwap <span className="text-blue-900">↔</span>
            </h1>
            <p className="text-xl font-semibold mt-2">
              Swap Skills, Grow Together!
            </p>
            <p className="text-md text-teal-900 mt-1">
              Hyperlocal-to-Peer Learning
            </p>
          </div>
          <img
            src={authImage}
            alt="SkillLinkr Visual"
            className="rounded-xl shadow-lg max-w-md w-full"
          />
        </div>

        {/* Right Panel */}
        <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-blue-700 to-blue-200 p-6">
          <div className="w-full max-w-md bg-gradient-to-b from-blue-700 to-blue-200 border border-white rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Hello! Welcome Back
            </h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-white mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-2 pr-16 rounded-md border border-gray-300 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-700 font-semibold text-sm"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 mt-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
              >
                SIGN IN
              </button>

              <p className="text-center text-black mt-4">
                don't have an acount?{" "}
                <Link 
                to={"/register"}
                className="underline text-green-600 font-bold font-Poppins hover:text-black duration-200">
                  Sign Up
                </Link>
              </p>
            </form>
            <footer className="text-center text-sm text-blue-700 font-bold mt-6 selection:text-white">
              © 2025 SkillSwap
            </footer>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
