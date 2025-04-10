import React from "react";
// import { GiBodySwapping } from "react-icons/gi";
import { RiLinksLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SkillMarketPlace = () => {
  const skills = [
    { id: 1, name: "Web Development", tag: "#webdev", category: "Tech" },
    { id: 2, name: "Graphic Design", tag: "#design", category: "Creative" },
    { id: 3, name: "Guitar Playing", tag: "#guitar", category: "Music" },
    { id: 4, name: "Photography", tag: "#photography", category: "Creative" },
    { id: 5, name: "Video Editing", tag: "#videoedit", category: "Creative" },
    {
      id: 6,
      name: "Public Speaking",
      tag: "#speaking",
      category: "Soft Skill",
    },
    { id: 7, name: "Cooking", tag: "#cooking", category: "Lifestyle" },
    { id: 8, name: "Yoga", tag: "#yoga", category: "Wellness" },
    { id: 9, name: "UI/UX Design", tag: "#uxui", category: "Tech" },
    { id: 10, name: "ReactJS", tag: "#react", category: "Tech" },
    { id: 11, name: "Data Science", tag: "#datascience", category: "Tech" },
    {
      id: 12,
      name: "Digital Marketing",
      tag: "#marketing",
      category: "Business",
    },
    { id: 13, name: "Spanish Language", tag: "#spanish", category: "Language" },
    { id: 14, name: "Singing", tag: "#singing", category: "Music" },
    { id: 15, name: "Fitness Training", tag: "#fitness", category: "Wellness" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen flex justify-center items-start bg-gradient-to-t from-white to-blue-700 p-4">
        <div className="w-full max-w-5xl bg-white/30 rounded-xl shadow-2xl backdrop-blur-sm p-6">
          {/* Header */}
          <div className="flex items-center gap-2 text-white text-3xl font-bold mb-6">
            <RiLinksLine />
            <span>SkillLinkr</span>
          </div>

          {/* Title + Subtitle */}
          <div className="mb-6 w-full text-center">
            <h2 className="text-3xl font-Poppins text-white">
              Skills Marketplace
            </h2>
            <p className="text-lg text-gray-100 mt-2">
              Browse all available skills from other users.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <div className="flex w-full max-w-xl bg-white rounded-full shadow-md overflow-hidden">
              <input
                type="text"
                placeholder="Search Skills"
                className="w-full px-5 py-2 text-gray-700 font-medium focus:outline-none"
              />
              <button className="bg-blue-600 p-3 text-white hover:bg-blue-700 transition-all">
                <FaSearch className="text-xl" />
              </button>
            </div>
          </div>

          {/* Skill Tags */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-full font-medium transition-all cursor-pointer text-center shadow-md"
              >
                {skill.tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SkillMarketPlace;
