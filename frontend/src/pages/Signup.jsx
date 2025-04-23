import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import authImage from "../assets/authImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { IoLogoFacebook } from "react-icons/io";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreeToTerms, setAgreeTOTerms] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    skillyouoffre: "",
    skillyouwant: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const {
      name,
      email,
      phone,
      address,
      password,
      skillyouoffre,
      skillyouwant,
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !password ||
      !skillyouoffre ||
      !skillyouwant
    ) {
      return toast.error("All fields are required!", {
        position: "top-center",
      });
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_USERS_BASE_URL}users/register`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success(response.data.message || "Registration successful!", {
        position: "top-center",
      });
      setLoading(false);
      navigate("/login");
    } catch (err) {
      console.error("Registration Error:", err);
      toast.error(
        err.response?.data?.error || "Registration failed. Try again!",
        {
          position: "top-center",
        }
      );
    }
  };

  const handleToggelPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4682b4] to-[#add8e6] p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-5xl relative"
        >
          {/* Image / Info Section */}
          <div className="hidden md:flex flex-col items-center justify-center bg-blue-100 p-10 w-1/2 text-center">
            <img
              src={authImage}
              alt="SkillSwap Illustration"
              className="w-96 mb-6 object-cover rounded-md"
            />
            <p className="text-gray-700 text-lg">
              Swap what you know for what you want to learn.
              <br />
              No money. Just skills. Learn locally or online.
            </p>
          </div>

          {/* Signup Form Section */}
          <div className="flex-1 p-8 md:p-12 flex items-center justify-center">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Create Your Account
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="skillyouoffre"
                  placeholder="Skill You Offer"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.skillyouoffre}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="skillyouwant"
                  placeholder="Skill You Want"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.skillyouwant}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Your Address"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="text-center flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    id="our-privacy-policy"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeTOTerms(e.target.checked)}
                  />
                  <label
                    htmlFor="our-privacy-policy"
                    className="cursor-pointer text-gray-700"
                  >
                    I agree to the{" "}
                    <Link
                      to={"/our-privacy-policy"}
                      className="text-blue-500 font-bold"
                    >
                      Terms & Conditions
                    </Link>
                  </label>
                </div>
                <span
                  className="absolute right-14 lg:bottom-40 md:bottom-40 bottom-[145px] cursor-pointer text-sm text-blue-700 font-bold"
                  onClick={handleToggelPassword}
                >
                  {showPassword ? "hide" : "show"}
                </span>
                <button
                  type="submit"
                  disabled={loading || !agreeToTerms}
                  className={`w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center ${
                    loading || !agreeToTerms
                      ? "bg-blue-300 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  } `}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>Sign up</>
                  )}
                </button>
              </form>
              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 text-md font-bold">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
