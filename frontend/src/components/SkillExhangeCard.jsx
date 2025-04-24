import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationDot } from 'react-icons/fa6';
import face1 from '../assets/face1.png';
import face2 from '../assets/face2.jpg';

// Skill data
const skillData = [
  {
    person1: { name: 'Aisha', teaches: 'Python', learns: 'Python Programming', image: face2 },
    person2: { name: 'Leo', teaches: 'UI/UX', learns: 'UI/UX Design', image: face2 },
    highlight: 'Perfect Match Found\nReady to Exchange!',
  },
  {
    person1: { name: 'Leo', teaches: 'JavaScript', learns: 'Digital Art', image: face2 },
    person2: { name: 'Emma', teaches: 'React', learns: '1-on-1 Sessions: Tuesday 6PM', image: face2 },
    highlight: '1-on-1 Sessions Booked -\nNext Class: Tuesday 6PM',
  },
  {
    person1: { name: 'Carlos', teaches: 'UI/UX', learns: 'Speaking Confidence', image: face1 },
    person2: { name: 'Nina', teaches: 'Backend', learns: 'Ranking Strategies', image: face2 },
    highlight: "Sessions Begin This Week\nLet's Grow Together!",
  },
  {
    person1: { name: 'Zara', teaches: 'Figma', learns: 'Public Speaking', image: face1 },
    person2: { name: 'Arjun', teaches: 'Next.js', learns: 'UI Animations', image: face2 },
    highlight: "Excited to Learn from Each Other!",
  },
];

const SkillCard = ({ person1, person2, highlight }) => (
  <div className="bg-gradient-to-tr from-blue-500 to-white border border-blue-500 rounded-2xl shadow-lg p-6 min-w-[300px] w-[300px] flex-shrink-0 text-center mx-2">
    <h2 className="text-xl font-semibold text-blue-700 mb-4">Skill Exchange 🔁</h2>
    <div className="flex justify-between items-center mb-4 gap-4">
      {[person1, person2].map((person, idx) => (
        <div className="flex flex-col items-center" key={idx}>
          <img
            src={person.image}
            alt={person.name}
            className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover mb-1"
          />
          <p className="font-bold text-lg">{person.name}</p>
          <p className="text-xs text-gray-5600">teaches</p>
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mt-1 border border-blue-400">
            {person.teaches}
          </span>
        </div>
      ))}
    </div>
    <ul className="text-left text-sm text-blue-800 mb-3 space-y-1">
      <li className="flex items-center gap-2">
        <FaLocationDot className="text-white" /> <strong>{person1.name}</strong> Learns: {person1.learns}
      </li>
      <li className="flex items-center gap-2">
        <FaLocationDot className="text-blue-500" /> <strong>{person2.name}</strong> Learns: {person2.learns}
      </li>
    </ul>
    <p className="font-medium text-gray-700 whitespace-pre-line">{highlight}</p>
  </div>
);

const SkillExchangeCards = () => {
  // Double the data for seamless looping
  const cards = [...skillData, ...skillData];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-white py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-white mb-10">Skill Exchange Matches</h1>
      <div className="overflow-hidden">
        <motion.div
          className="flex w-max cursor-pointer"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          }}
        >
          {cards.map((data, index) => (
            <SkillCard key={index} {...data} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillExchangeCards;
