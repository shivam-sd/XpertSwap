import React from "react";
import ritiksir from "../assets/ritiksir.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MentorRitikSir = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-600 to-blue-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-10 max-w-4xl w-full text-center">
          {/* Mentor Photo */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={ritiksir}
              alt="Ritik Sir - Mentor"
              className="w-40 h-40 rounded-full cursor-pointer border-4 border-blue-500 object-cover shadow-md hover:scale-105 duration-200"
            />
            <h2 className="text-3xl font-bold text-blue-800 mt-4">
              Ritik Sir - Our Mentor 🙌
            </h2>
            <p className="text-gray-600 mt-2">
              Guiding light behind{" "}
              <span className="font-semibold">SkillLinkr</span>
            </p>
          </div>

          {/* Platform Description */}
          <div className="text-left text-gray-700 space-y-4">
            <p>
              Under the invaluable guidance of{" "}
              <span className="font-semibold text-blue-600">Ritik Sir</span>, we
              created a platform that connects people based on skills.
            </p>
            <p>
              <span className="font-bold text-blue-700">SkillLinkr</span> is a
              real-time skill exchange platform where people can
              <span className="font-semibold text-blue-600">
                {" "}
                teach and learn skills from each other
              </span>{" "}
              – all based on mutual exchange.
            </p>
            <p>
              From local mentor connections to real-time communication and skill
              sharing, SkillLinkr empowers every learner and teacher to grow
              together.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MentorRitikSir;
