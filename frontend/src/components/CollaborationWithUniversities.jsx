import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const CollaborationWithUniversities = () => {

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
        className="min-h-screen text-white font-sans relative overflow-x-hidden bg-gradient-to-br from-[#2e7de4] to-[#5596ff] mt-1"
      >
        <div
          className="absolute inset-0 -z-10 opacity-70 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>
        <div className="max-w-4xl mx-auto px-5 py-12 bg-black/50 rounded-2xl shadow-2xl animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 animate-fadeInUp">
            Join as an Institution – XpertSwap
          </h1>
          <p className="text-center font-semibold mb-6 animate-fadeInUp">
            Empower Your Students with Real-World Learning That Sets Them Apart
          </p>
          <p className="mb-6 animate-fadeInUp">
            At XpertSwap, we believe learning should extend beyond classrooms
            and theory. Our platform enables institutions to help students gain
            hands-on experience, sharpen communication, and apply their
            knowledge in a peer-to-peer, skill-sharing ecosystem. Whether you're
            a university, college, coaching center, or training institute —
            XpertSwap equips your students to stand one step ahead of the crowd.
          </p>

          <h2 className="text-2xl font-bold text-center mt-8 mb-4 animate-fadeInUp">
            Why Partner with XpertSwap?
          </h2>
          <ul className="list-disc pl-6 space-y-2 animate-fadeInUp">
            <li>
              <strong>Real-World Exposure:</strong> Students connect directly
              with real users and experts to learn practical, job-ready skills.
            </li>
            <li>
              <strong>Skill-to-Skill Exchange Model:</strong> Students both
              teach and learn from peers, building confidence and competence in
              a collaborative way.
            </li>
            <li>
              <strong>Flexible Learning Environment:</strong> Options for live
              sessions, 1-on-1 swaps, and self-paced learning — perfect for
              academic schedules.
            </li>
            <li>
              <strong>Personal & Professional Growth:</strong> Improves
              presentation, problem-solving, and communication skills through
              peer engagement.
            </li>
            <li>
              <strong>Post-Learning Real-World Projects:</strong> Students gain
              access to industry-inspired projects to build real portfolios.
            </li>
            <li>
              <strong>Institution Dashboard (Coming Soon):</strong> Track
              student activity, progress, and engagement in one centralized
              dashboard.
            </li>
            <li>
              <strong>Social Recognition & Showcases:</strong> Top performers
              and projects are featured on our social platforms.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-center mt-8 mb-4 animate-fadeInUp">
            Who Can Join?
          </h2>
          <ul className="list-disc pl-6 space-y-2 animate-fadeInUp">
            <li>Schools, Colleges & Universities</li>
            <li>Coaching Institutes & Training Academies</li>
            <li>NGOs and Skill Development Missions</li>
            <li>Innovation Hubs & Research Labs</li>
            <li>Online Learning Platforms</li>
          </ul>

          <h2 className="text-2xl font-bold text-center mt-8 mb-4 animate-fadeInUp">
            What Makes XpertSwap Different?
          </h2>
          <ul className="list-disc pl-6 space-y-2 animate-fadeInUp">
            <li>
              Peer-to-peer video calls with built-in chat and screen sharing
            </li>
            <li>Structured skill exchange with review cycles</li>
            <li>1-day learning gap system for deeper retention</li>
            <li>
              Opportunity to practice skills on real-world projects after
              completion
            </li>
            <li>Resume and portfolio building opportunities for students</li>
          </ul>

          <div className="text-center mt-10 space-y-4 animate-fadeInUp">
            <p className="font-semibold">
              Ready to Join?
              <br />
              Fill out the form below and our team will reach out with your
              onboarding kit and support materials.
            </p>
            
              <Link to={"/Institution-Join-Form"} className="bg-white text-[#2e7de4] font-medium rounded-full px-6 py-3 hover:bg-gray-200 transition transform hover:-translate-y-1">
                Fill the Join Form
              </Link>
            
            <p>
              Need help? Contact us at{" "}
              <a
                href="mailto:contact.xpertswap@gmail.com"
                className="text-yellow-300 underline"
              >
                contact.xpertswap@gmail.com
              </a>{" "}
              or connect via our social handles.
            </p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default CollaborationWithUniversities;
