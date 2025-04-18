import React from "react";
import { motion } from "framer-motion";
import { Users, UserCheck, MessageSquare, Repeat } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";

const stats = [
  { label: "Swaps Confirmed", value: 12 },
  { label: "Skills Offered", value: 8 },
  { label: "Reviews Received", value: 5 },
];

const actions = [
  { label: "Find People's", icon: Users, to: "/find-people" },
  { label: "My Requests", icon: Repeat, to: "/request" },
  { label: "Chats", icon: MessageSquare, to: "/chat" },
];

const StatCard = ({ label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white/90 backdrop-blur-md p-5 rounded-xl text-center shadow-md hover:shadow-xl transition"
  >
    <p className="text-4xl font-bold text-blue-800 mb-1">{value}</p>
    <p className="text-gray-700 text-sm font-medium">{label}</p>
  </motion.div>
);

const ActionLink = ({ label, Icon, to }) => (
  <motion.div whileHover={{ scale: 1.03 }}>
    <Link
      to={to}
      className="flex items-center gap-3 px-5 py-3 bg-white/90 border border-blue-100 rounded-xl shadow hover:shadow-lg transition text-blue-800 hover:text-blue-900"
    >
      <Icon size={22} />
      <span className="text-base font-medium">{label}</span>
    </Link>
  </motion.div>
);

export default function Dashboard() {

  const user = useSelector((state) => state?.user?.user?.user);
  // console.log("Users From Dashboard" ,user )

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-b from-blue-700 to-white px-4 py-10 flex flex-col gap-10 items-center"
      >
        {/* Welcome Message */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
            Welcome back, {user?.name} 👋
          </h1>
          <p className="text-blue-100 mt-2 text-sm md:text-base">
            Here's a quick glance at your XpertSwap dashboard.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {actions.map(({ label, icon: Icon, to }) => (
            <ActionLink key={label} label={label} Icon={Icon} to={to} />
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
