import React from "react";
import {
  FaUserEdit,
  FaEye,
  FaBuilding,
  FaTrophy,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Image from "../assets/freshGraduates.jpg";

const bgImage = Image;

const FreshGraduates = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const Loggedin = localStorage.getItem("token");

  return (
    <>
      <Header />
      <motion.section
        className="w-full bg-gray-50 overflow-x-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* 🔷 Background Image */}
        <img
          className="w-full h-[300px] md:h-[430px] bg-cover bg-center object-fill"
          src={bgImage} alt="fresh graduates"
        />

        {/* 🔷 Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-10">
          {/* 🔹 Left Box */}
          <motion.div
            className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md font-bold font-Poppins"
            variants={fadeIn}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-4">
              Welcome Fresh Graduates! Start Your Real Learning Journey
            </h2>
            <p className="text-gray-700 mb-3">
              College se nikalte hi confusion hoti hai – ab kya karein?
              XpertSwap ke sath apni skills ko polish karo aur naye skills
              seekho real logon se, real duniya ke examples ke sath.
            </p>
            <p className="text-gray-700 mb-6">
              Yahan aap kisi aur ki skill seekh kar apni skill de sakte hain.
              Zero pressure, sirf growth – chahe aap beginner ho ya intermediate
              ya industry expert.
              <br /><br />
              Aapke paas jo knowledge hai, usse dusron ko sikhaiye. Aur unse
              sikhaiye jinke paas practical experience hai. Mutual growth hi
              XpertSwap ka core hai.
              <br /> <br />
              India ke naye talent ka hub – XpertSwap pe active rahiye, top learners/mentors list me aayein aur apna impact banaiye.
            </p>
            {/* <button className="bg-blue-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-md text-sm font-semibold transition">
              Start Building Your Skill Profile
            </button> */}
          </motion.div>

          {/* 🔹 Right Box - Features */}
          <motion.div
            className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md space-y-4"
            variants={fadeIn}
          >
            <Feature
              icon={<FaUserEdit />}
              text="Create customized skill profile"
            />
            <Feature
              icon={<FaTrophy />}
              text="Showcase core skillset, assessment scores and other talent"
            />
            <Feature icon={<FaEye />} text="Be visible to top organisations" />
            <Feature
              icon={<FaBuilding />}
              text="- Teach what you know, build confidence  
"
            />
            <Feature
              icon={<FaBriefcase />}
              text="Gain project experience for your portfolio"
            />
            <Feature
              icon={<FaBuilding />}
              text="Flexible learning, on your own time"
            />
            <Feature
              icon={<FaBriefcase />}
              text="Build your network across India"
            />
            <Feature
              icon={<FaBriefcase />}
              text="Grow without pressure, at your own pace
"
            />
            <Feature
              icon={<FaBriefcase />}
              text="Learn in-demand skills from real peers 
"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Who Can Apply Section */}
      <motion.section
        className="w-full overflow-x-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <section className="bg-cyan-100 py-12 px-4 text-center flex flex-col items-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
            Who Can Apply
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                id: "01",
                text: "College ya job ke baad bhi asaani se seekh sakte ho – apne time ke according.",
              },
              {
                id: "02",
                text: "Har skill exchange ke baad feedback milega jo aapki credibility banayega.",
              },
              {
                id: "03",
                text: "Students who are about to take or have just taken the course-end examinations",
              },
              {
                id: "04",
                text: "India ke har kone se log jud rahe hain – naye connections aur career opportunities ke liye best chance.",
              },
            ].map((item) => (
              <motion.div
                key={item.id}
                className="bg-gradient-to-b to-gray-400 from-blue-700 font-bold tracking-wider text-white rounded-md py-6 px-4 shadow-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-bold mb-2">{item.id}</h3>
                <p className="text-sm font-Poppins">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {!Loggedin && (
            <Link
              to="/register"
              className="mt-10 bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-indigo-800 transition text-sm font-medium"
            >
              Register Now
            </Link>
          )}
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-12 px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-blue-700 shadow-md text-white rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
            variants={fadeIn}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-1">
                Build your skill profile to land in your dream job.
              </h3>
              <p className="text-sm">
                We’ll be glad to have you with us, see you soon!
              </p>
            </div>
            {!Loggedin && (
              <Link
                to="/register"
                className="bg-white text-indigo-900 px-5 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition"
              >
                Register
              </Link>
            )}
          </motion.div>
        </section>
        <Footer />
      </motion.section>
    </>
  );
};

// 🔄 Feature Box Component
const Feature = ({ icon, text }) => (
  <div className="flex items-start space-x-3 text-gray-800 border-b border-gray-200 pb-2">
    <div className="text-indigo-900 text-lg">{icon}</div>
    <p className="text-sm sm:text-base font-Poppins font-bold">{text}</p>
  </div>
);

export default FreshGraduates;
