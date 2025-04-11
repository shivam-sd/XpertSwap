import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // For mobile toggle

  return (
    <nav className="bg-white shadow-xl w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link
            to={"/"}
            className="text-lg font-bold text-blue-800 leading-tight"
          >
            <span className="block leading-none text-xl">Skill</span>
            <span className="text-green-600 text-xl">Linkr</span>
          </Link>
          <div className="border-l border-gray-300 h-8 mx-2" />
          <div className="font-semibold text-xl">Skill Exchange</div>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700 relative">
          {/* About with dropdown */}
          <div className="relative group">
            <div className="group flex items-center space-x-1 cursor-pointer hover:text-blue-700 text-base font-bold duration-300">
              About &nbsp; <FaChevronDown size={12} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-44 bg-white shadow-lg rounded-md py-2 hidden group-hover:block z-50 duration-200"
            >
              <Link
                to="/user-profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link to="/nearby" className="block px-4 py-2 hover:bg-gray-100">
                Nearby Users
              </Link>
              <Link
                to="/skill-marketplace"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Skill Marketplace
              </Link>
              <Link to="/request" className="block px-4 py-2 hover:bg-gray-100">
                Skill Request
              </Link>
              <Link to="/user-list" className="block px-4 py-2 hover:bg-gray-100">
                User List
              </Link>
              <Link to="/our-mentor" className="block px-4 py-2 hover:bg-gray-100">
                Mentor
              </Link>
            </motion.div>
          </div>

          <Link
            to="/nearby"
            className="hover:text-blue-700 text-base font-bold transition"
          >
            Nearby Users
          </Link>
          <Link
            to="/fresh-graduates"
            className="hover:text-blue-700 text-base font-bold transition"
          >
            Fresh Graduates
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-blue-700 text-base font-bold transition"
          >
            Dashboard
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-700 text-base font-bold transition"
          >
            Contact
          </Link>

          {/* Auth Buttons */}
          <div className="flex space-x-3">
            <Link
              to="/register"
              className="bg-indigo-900 text-white hover:bg-indigo-800 px-4 py-2 text-base rounded-md transition flex items-center space-x-1"
            >
              <span>Register</span>
              <FaChevronDown size={12} />
            </Link>
            <Link
              to="/login"
              className="bg-indigo-900 text-white hover:bg-indigo-800 px-4 py-2 text-base rounded-md transition flex items-center space-x-1"
            >
              <span>Login</span>
              <FaChevronDown size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 text-sm font-medium text-gray-700 space-y-3"
          >
            {/* About Dropdown Mobile */}
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full hover:text-blue-700"
              >
                <span>About</span>
                <FaChevronDown
                  className={`transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 mt-1 space-y-2"
                  >
                    <Link
                      to="/user-profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/nearby"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Nearby Users
                    </Link>
                    <Link
                      to="/skill-marketplace"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Skill Marketplace
                    </Link>
                    <Link
                      to="/request"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Skill Request
                    </Link>
                    <Link
                      to="/user-list"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      User List
                    </Link>
                    <Link
                      to="/mentor"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Mentor
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/nearby" className="block hover:text-blue-700">
              Nearby User
            </Link>
            <Link to="/fresh-graduates" className="block hover:text-blue-700">
              Fresh Graduates
            </Link>
            <Link to="/dashboard" className="block hover:text-blue-700">
              Dashboard
            </Link>
            <Link to="/contact" className="block hover:text-blue-700">
              Contact
            </Link>

            <div className="flex flex-col space-y-2 pt-2">
              <Link
                to="/register"
                className="bg-indigo-900 text-white hover:bg-indigo-800 px-4 py-2 rounded-md transition text-center"
              >
                Register <FaChevronDown size={12} className="inline ml-1" />
              </Link>
              <Link
                to="/login"
                className="border border-indigo-900 text-blue-700 hover:bg-indigo-800 hover:text-white px-4 py-2 rounded-md transition text-center"
              >
                Login <FaChevronDown size={12} className="inline ml-1" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
