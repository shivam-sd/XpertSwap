import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.png";  
import hero3 from "../assets/hero3.jpg";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Enabling Industry to Access Ready-to-Deploy Fresh Graduates",
    description:
      "Access millions of skill profiles to connect and recruit fresh minds across India and showcase productivity from day one!",
    image: hero1,
    bgColor: "bg-gradient-to-b from-blue-700 to-white",
  },
  {
    title: "Bridge the Gap Between Talent and Industry",
    description:
      "Connect with skilled professionals ready to contribute and drive innovation from the start.",
    image: hero2,
    bgColor: "bg-gradient-to-t from-blue-700 to-white",
  },
  {
    title: "Unlock Potential with the Right Skills",
    description:
      "Hire talents that match your vision and boost team efficiency instantly.",
    image: hero3,
    bgColor: "bg-gradient-to-b from-green-300 to-lime-200",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { title, description, image, bgColor } = slides[current];

  return (
    <section className={`w-full overflow-x-hidden transition-colors duration-1000 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={title}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {title.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-1">
                  {word}
                </span>
              ))}
            </h1>
            <p className="text-gray-700 mb-6 text-base sm:text-lg">{description}</p>
            <Link 
            to="/fresh-graduates"
            className="bg-indigo-900 text-white px-6 py-3 rounded-md text-sm hover:bg-indigo-800 transition">
              Get Started
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Image Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={image}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src={image}
              alt="Hero Slide"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
