import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { GiBodySwapping } from "react-icons/gi";
import { RiLinksLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NearbyUser = () => {
  const [showBackButton, setShowBackButton] = useState(false);

  const handleDotForBack = () => {
    setShowBackButton(!showBackButton);
  };

  const usersData = [
    { name: "John Doe", skills: ["Guitar", "Photographer"], distance: "2 km" },
    { name: "Jane Smith", skills: ["React", "Deployment"], distance: "3 km" },
    { name: "Alice Johnson", skills: ["Singing", "Dancing"], distance: "1 km" },
    { name: "Bob Brown", skills: ["Teaching", "Playing"], distance: "4 km" },
    { name: "Charlie Davis", skills: ["English", "Cooking"], distance: "5 km" },
    { name: "David Wilson", skills: ["Editing", "Shooting"], distance: "2 km" },
    {
      name: "Eve Taylor",
      skills: ["Graphic Design", "Video Editing"],
      distance: "3 km",
    },
    {
      name: "Frank Anderson",
      skills: ["Development", "Programming"],
      distance: "1 km",
    },
  ];

  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center lg:p-10">
        <div className="w-full max-w-6xl bg-gradient-to-t from-gray-100 to-blue-700 lg:rounded-lg shadow-lg p-5 relative">
          {/* Toggle Button on Mobile */}
          <div className="lg:hidden absolute right-5 top-6">
            <BsThreeDotsVertical
              className="text-white text-2xl cursor-pointer"
              onClick={handleDotForBack}
            />
            {showBackButton && (
              <button className="absolute top-0 right-8 text-white bg-red-600 px-3 py-1 rounded transition-all duration-200">
                Back
              </button>
            )}
          </div>

          {/* Header */}
          <h1 className="text-3xl text-white font-bold font-Poppins mb-8 ml-5 flex items-center gap-2">
            <span>
              <RiLinksLine className="text-md" />
            </span>
            SkillLinkr
          </h1>

          {/* Intro Section */}
          <div className="mt-5 px-3  justify-between lg:pr-20 grid grid-cols-1 lg:grid-cols-2 gap-5 ">
            <div className="">
              <h3 className="text-4xl text-white font-bold font-Poppins">
                Explore Nearby
              </h3>
              <p className="text-lg font-medium font-Poppins mt-2 text-gray-100">
                Connect with people in your area to exchange skills
              </p>
              <button className="text-sm font-semibold font-Poppins px-4 py-2 bg-white text-blue-600 rounded-md mt-4 hover:bg-blue-50 transition">
                Filter
              </button>
            </div>

            <div className="search flex items-center bg-white rounded-full shadow-md hover:shadow-lg transition outline-none w-full h-11 pl-5">
              <input
                type="text"
                placeholder="Search Nearby"
                className="outline-none w-full text-md font-bold -tracking-tighter font-Poppins p-1"
              />
              <FaSearch className="bg-blue-600 h-full w-10 cursor-pointer p-1 text-md text-3xl text-white rounded-r-full" />
            </div>
          </div>

          {/* User Cards Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10 lg:p-3">
            {usersData.map((user, index) => (
              <div
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition"
                key={index}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"
                    alt={user.name}
                    className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover"
                  />
                  <h4 className="text-lg font-bold font-Poppins">
                    {user.name}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {user.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-600 text-white text-sm font-Poppins px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-green-600 font-semibold font-Poppins">
                    {user.distance}
                  </p>
                  <button className="bg-red-500 text-white font-semibold font-Poppins px-4 py-1 rounded hover:bg-red-600 transition">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NearbyUser;
