import React, { useState } from "react";
// import { GiBodySwapping } from "react-icons/gi";
import { RiLinksLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const SkillMarketPlace  = () => {
  const [skills, setSkills] = useState("");
  const [addSkills, setAddSkills] = useState([]);

  const handleSumitSkills = (e) => {
    e.preventDefault();
    if (skills.trim() !== "") {
      setAddSkills((prevSkills) => [...prevSkills, skills]);
      setSkills("");
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="min-h-screen flex justify-center items-start bg-gradient-to-t from-white to-blue-700 p-4"
      >
        <div className="w-full max-w-5xl bg-white/30 rounded-xl shadow-2xl backdrop-blur-sm p-6">
          {/* Header */}
          <div className="flex items-center gap-2 text-white text-3xl font-bold mb-6">
            <RiLinksLine />
            <span>SkillLinkr</span>
          </div>

          {/* Title + Subtitle */}
          <div className="mb-6 w-full text-center">
            <h2 className="text-3xl font-Poppins text-white">Add Skills</h2>
            <p className="text-lg text-gray-100 mt-2">
              Browse all available skills from other users.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <div className="flex w-full max-w-xl bg-white rounded-full shadow-md overflow-hidden">
              <form
                className="flex w-full max-w-xl bg-white rounded-full shadow-md overflow-hidden"
                onSubmit={handleSumitSkills}
              >
                <input
                  type="text"
                  placeholder="Add Skills"
                  name="skill"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="w-full px-5 py-2 text-gray-700 font-medium focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 p-3 text-white hover:bg-blue-700 transition-all"
                >
                  <FaSearch className="text-xl" />
                </button>
              </form>
            </div>
          </div>

          {/* Skill Tags */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {addSkills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-blue-600 hover:bg-blue-800 text-white p-2 rounded-full font-medium transition-all cursor-pointer text-center shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default SkillMarketPlace;
