import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleContect = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append("access_key", "997fa1ac-8b53-47a0-a76e-aea138e5f89b");
    setResult("...Sending Your Problem");
    const response = await axios.post(
      "https://api.web3forms.com/submit",
      formData
    );
    const data = response.data;
    console.log("Form Data", data);

    if (data.success) {
      setResult("Your Problem Successfully Send");
      toast.success("We Will Be Contact Soon", {
        position: "top-center",
      });
      e.target.reset();
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      <Header />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-12 px-4 w-full bg-gradient-to-b from-blue-600 to-white"
      >
        <div className="max-w-2xl mx-auto p-3 shadow-2xl">
          <div className="text-center mb-5">
            <h2 className="text-3xl font-bold text-white font-Poppins">
              Contact SkillLinkr
            </h2>
            <p className="text-gray-200 mt-2 text-lg">
              Have questions or facing issues? Let us know. We're here to help!
            </p>
          </div>

          <form
            className=" shadow-xl rounded-xl p-6 space-y-5"
            onSubmit={handleContect}
          >
            {/* Name */}
            <div>
              <label className="block text-xl font-bold text-white mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your FullName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xl font-bold text-white mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            {/* Problem */}
            <div>
              <label className="block text-xl font-bold text-white  mb-1">
                Your Problem
              </label>
              <textarea
                name="problem"
                placeholder="Write your issue or message..."
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
              ></textarea>
            </div>

<p className="w-full text-center text-blue-700 font-bold text-lg font-Poppins">{result}</p>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-indigo-800 text-white py-2 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default Contact;
