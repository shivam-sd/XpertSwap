import React, { useState } from "react";
import { GiBodySwapping } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {motion} from "framer-motion";

const Request = () => {
  // Sample data for skill requests
  const skillRequests = [
    {
      name: "Anna Smith",
      offerSkill: "Photography",
      wantToLearn: "Guitar",
      avatar:
        "https://png.pngtree.com/png-clipart/20190516/original/pngtree-cute-girl-avatar-material-png-image_4023832.jpg",
    },
    {
      name: "John Doe",
      offerSkill: "Cooking",
      wantToLearn: "React",
      avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    },
    {
      name: "Emily Johnson",
      offerSkill: "UI/UX Design",
      wantToLearn: "Video Editing",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    },
    {
      name: "Michael Brown",
      offerSkill: "Guitar",
      wantToLearn: "Public Speaking",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    },
  ];

  // skills
  const skills = [
    "",
    "Web Development",
    "Graphic Design",
    "Public Speaking",
    "Photography",
    "Video Editing",
    "React",
    "Node.js",
    "Cooking",
    "Guitar",
    "Singing",
    "Dancing",
    "Writing",
    "Copywriting",
    "Digital Marketing",
    "UI/UX Design",
    "Illustration",
    "Drawing",
    "Chess",
    "Math Tutoring",
    "English Speaking",
    "Yoga",
    "Fitness Training",
    "Baking",
    "Swimming",
    "Spanish",
    "German",
    "Mandarin",
    "C++",
    "Python",
    "Java",
    "Kotlin",
    "Android Development",
    "iOS Development",
    "SEO",
    "Email Marketing",
    "Painting",
    "Sculpting",
    "3D Modeling",
    "Photography Editing",
    "Podcasting",
    "Music Production",
  ];


  const fadeIn = {
    hidden: {opacity:0, y:20},
    visible: {opacity : 1, y:0 , transition: {duration:0.8}}
  }

 

  return (
    <>
      <Header />
      <motion.div
       initial= "hidden"
       animate = "visible"
       variants={fadeIn}
      className="min-h-screen flex justify-center items-start bg-gradient-to-t from-white to-blue-700 p-2 sm:p-4 lg:p-6">
        <div className="w-full max-w-5xl rounded-xl shadow-2xl backdrop-blur-sm p-4 sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-6 p-3 rounded-lg">
            <div className="flex gap-2 sm:gap-3 items-center">
              <GiBodySwapping className="text-xl sm:text-2xl lg:text-3xl" />
              <span>Swap Request</span>
            </div>
            <FaArrowLeft className="cursor-pointer text-lg sm:text-xl" />
          </div>

          {/* Request a skill from another user. */}
          <div className="flex flex-col items-center justify-center gap-4 mb-6 w-full text-center shadow-xl mt-8 sm:mt-14 p-3 sm:p-4 bg-opacity-80 rounded-lg">
            {/* first */}
            <div className="bg-white flex items-center justify-between w-full max-w-xs sm:max-w-md p-2 rounded-md shadow-xl cursor-pointer">
              <input
                type="text"
                placeholder="Select Your Skill:"
                disabled
                className="w-full bg-transparent outline-none"
              />
              <select
                name=""
                id=""
                className="bg-transparent outline-none cursor-pointer"
              >
                {skills.map((skill, idx) => {
                  return (
                    <>
                      <option
                        value={skill}
                        key={idx}
                        className="text-sm font-Poppins font-bold bg-blue-500 text-gray-900"
                      >
                        {skill}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            {/* second */}
            <div className="bg-white flex items-center justify-between w-full max-w-xs sm:max-w-md p-2 rounded-md shadow-xl cursor-pointer">
              <input
                type="text"
                placeholder="Select Requested Skills:"
                disabled
                className="w-full bg-transparent outline-none"
              />
              <select
                name=""
                id=""
                className="bg-transparent outline-none cursor-pointer"
              >
                {skills.map((skill, idx) => {
                  return (
                    <>
                      <option
                        value={skill}
                        key={idx}
                        className="text-sm font-Poppins font-bold bg-blue-500 text-gray-900"
                      >
                        {skill}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            {/* third */}
            <div className="w-full flex items-center justify-center">
              <button className="text-lg text-white font-bold bg-blue-700 p-2 rounded-md w-full max-w-xs sm:max-w-md hover:bg-blue-800 transition-colors">
                Find Your Request
              </button>
            </div>
          </div>

          {/* Requests */}
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 ml-5">
              Your Request
            </h3>

            {/* // Request example */}

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 rounded-sm">
              {skillRequests.map((request, idx) => {
                return (
                  <>
                    <div
                      className="flex duration-300 items-center gap-3 w-full border border-gray-300 p-1 shadow-xl bg-transparent rounded-md  hover:bg-gradient-to-t from-lime-300 to-emerald-300 cursor-pointer"
                      key={idx}
                    >
                      <img
                        src={request.avatar}
                        alt="Profile"
                        className="w-12 sm:w-16 h-12 sm:h-16 rounded-full border-2 border-blue-700"
                      />
                      <div className="flex flex-col gap-1 text-left">
                        <p className="font-medium">{request.name}</p>
                        <p className="text-sm text-gray-600">
                          Wants to learn:{" "}
                          <span className="font-bold">
                            {request.wantToLearn}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600">
                          Can teach:{" "}
                          <span className="font-bold">
                            {request.offerSkill}
                          </span>
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 w-full sm:w-auto p-2 rounded-sm">
                        <button className="bg-blue-500 rounded-sm p-1 sm:p-2 font-bold text-white hover:bg-blue-600 transition-colors flex-1 sm:flex-none sm:px-4">
                          Accept
                        </button>
                        <button className="bg-gray-200 rounded-sm p-1 sm:p-2 font-bold hover:bg-gray-300 transition-colors flex-1 sm:flex-none sm:px-4">
                          Decline
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Request;
