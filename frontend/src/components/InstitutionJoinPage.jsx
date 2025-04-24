import React from 'react';

const InstitutionJoinPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-blue-400 text-white px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-black/50 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">Join as an Institution – XpertSwap</h1>
        <p className="text-lg text-center font-semibold mb-6">
          Empower Your Students with Real-World Learning That Sets Them Apart
        </p>

        <p className="mb-6">
          At XpertSwap, we believe learning should extend beyond classrooms and theory. Our platform enables institutions to help students gain hands-on experience, sharpen communication, and apply their knowledge in a peer-to-peer, skill-sharing ecosystem.
        </p>
        <p className="mb-10">
          Whether you're a university, college, coaching center, or training institute — XpertSwap equips your students to stand one step ahead of the crowd.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Partner with XpertSwap?</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li><strong>Real-World Exposure:</strong> Practical, job-ready learning with real users and experts.</li>
          <li><strong>Skill-to-Skill Exchange Model:</strong> Collaborative learning that boosts confidence.</li>
          <li><strong>Flexible Learning Environment:</strong> Live sessions, 1-on-1 swaps, and self-paced options.</li>
          <li><strong>Personal & Professional Growth:</strong> Improve soft skills through peer engagement.</li>
          <li><strong>Post-Learning Projects:</strong> Build a real portfolio with industry-style tasks.</li>
          <li><strong>Institution Dashboard:</strong> Monitor student progress (Coming Soon).</li>
          <li><strong>Social Recognition:</strong> Top talent showcased on our platforms.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Who Can Join?</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>Schools, Colleges & Universities</li>
          <li>Coaching Institutes & Training Academies</li>
          <li>NGOs and Skill Development Missions</li>
          <li>Innovation Hubs & Research Labs</li>
          <li>Online Learning Platforms</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">What Makes XpertSwap Different?</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>Peer-to-peer video calls with built-in chat and screen sharing</li>
          <li>Structured skill exchange with review cycles</li>
          <li>1-day learning gap system for deeper retention</li>
          <li>Practice on real-world projects after course completion</li>
          <li>Resume and portfolio building support for students</li>
        </ul>

        <div className="text-center">
          <p className="font-semibold text-lg mb-4">
            Ready to Join?<br />
            Fill out the form and get your onboarding kit.
          </p>
          <a href="./index2.html">
            <button className="bg-white text-blue-700 font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
              Fill the Join Form
            </button>
          </a>
          <p className="mt-4">
            Need help? Email us at{' '}
            <a href="mailto:contact.xpertswap@gmail.com" className="underline text-yellow-200">
              contact.xpertswap@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstitutionJoinPage;