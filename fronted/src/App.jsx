import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import OtherUserProfile from "./pages/OtherUserProfile";
import Chat from "./pages/Chat";
import Request from "./pages/Request";
import Nearby from "./pages/NearbyUser";
import SkillMarket from "./pages/SkillMarketPlace";
import FreshGraduates from "./pages/FreshGraduates";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import UserList from "./pages/UserList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/other-user-profile" element={<OtherUserProfile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/request" element={<Request />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/skill-marketplace" element={<SkillMarket />} />
        <Route path="/fresh-graduates" element={<FreshGraduates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-list" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
