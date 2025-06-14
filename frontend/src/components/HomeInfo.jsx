import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import HowtoUseXpertSwap1 from "../assets/HowtoUseXpertSwap1.pdf";
import IntroVideo from "../assets/introVideo.mp4";

// Images
import learnerImg from "../assets/heroinfo2.png";
import sharerImg from "../assets/heroinfo1.png";
import institutionImg from "../assets/heroinfo3.png";
import { Link } from "react-router-dom";

const HomeInfo = () => {
  const [allUsers, setAllUsers] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_USERS_BASE_URL}all/users`
      );
      // console.log("All User" , response);
      const users = response?.data?.allUsers || [];
      setAllUsers(users);
    } catch (err) {
      // toast.error("Failed to fetch users", { position: "top-center" });
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-indigo-50 to-blue-50 py-12 px-4 md:px-16">
      {/* Stats */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mb-12">
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-indigo-800">5+</h3>
          <p className="text-sm text-gray-600">Skills Exchanged</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-indigo-800">
            {allUsers.length}
          </h3>
          <p className="text-sm text-gray-600">Active Users</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-indigo-800">50+</h3>
          <p className="text-sm text-gray-600">Skills Categories</p>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-Poppins">
          Connecting People Through Skill Exchange
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-2 font-Poppins">
          XpertSwap is a platform where learners and professionals exchange
          skills with each other to grow together.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Card: Learners */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
          <img
            src={sharerImg}
            alt="Learners"
            className="w-24 h-24 mb-4 object-contain rounded-md"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            How To Use
          </h3>
          <p className="text-sm text-gray-600">
            Learn how to exchange skills, connect with people, and grow together
            – step by step. Click to open our beginner-friendly guide and get
            started in minutes!
          </p>
          <Link
            to={HowtoUseXpertSwap1}
            target="_blank"
            className="mt-3 text-indigo-700 font-medium hover:underline"
          >
            Start How To Use
          </Link>
        </div>

        {/* Card: Skill Sharers */}
        {/* <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
          <img src={learnerImg} alt="Skill Sharers" className="w-24 h-24 mb-4 object-contain rounded-md" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Skill Sharers</h3>
          <p className="text-sm text-gray-600">
            Share your knowledge and skills with others and build your reputation as a mentor while growing your own network.
          </p>
          <a href="#" className="mt-3 text-green-700 font-medium hover:underline">
            Start Sharing
          </a>
        </div> */}

        {/* Card: Institutions */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
          <img
            src={institutionImg}
            alt="Institutions"
            className="w-24 h-24 mb-4 object-contain rounded-md"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Collaboration With Universities
          </h3>
          <p className="text-sm text-gray-600">
            XpertSwap Collaborate with Collages And Universities to help your
            students enhance their practical learning by connecting with mentors
            and peers.
          </p>
          <Link
            to={"/universitis-collaboration"}
            className="mt-3 text-purple-700 font-medium hover:underline"
          >
            Join as Institution
          </Link>
        </div>
      </div>

      {/* Intro Video */}
      <h1 className="mt-6 mb-2 text-center text-4xl font-bold font-Poppins text-blue-600 shadow-lg p-2 cursor-pointer duration-300 hover:scale-105">
        Quick Guide
      </h1>
      <div className="w-full max-w-5xl mx-auto px-4 py-6">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <video
            src={IntroVideo}
            className="w-full h-full object-cover absolute top-0 left-0 cursor-pointer"
            autoPlay
            controls
            muted // Muted for autoplay to work across browsers
            loop // Loop the video
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default HomeInfo;
