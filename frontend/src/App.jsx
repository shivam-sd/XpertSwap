import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import OtherUserProfile from "./pages/OtherUserProfile";
import Chat from "./pages/Chat";
import Request from "./pages/Request";
import FindPeoples from "./pages/FindPeoples";
import SkillMarket from "./pages/SkillMarketPlace";
import FreshGraduates from "./pages/FreshGraduates";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import OurTeam from "./components/OurTeam";
import EditUserProfile from "./pages/EditUserProfile";
import Context from "./context/Context";
import PrivacyPolicy from "./pages/PrivacyProlicy";
import SendRequestForm from "./pages/SendRequestForm";
import { setUserDetails } from "./store/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import VideoCall from "./pages/VideoCall";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import CollaborationWithUniversities from "./components/CollaborationWithUniversities";
import InstitutionJoinPage from "./components/InstitutionJoinPage";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const fetchUsersDetails = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) return;

      const response = await axios.get(`${import.meta.env.VITE_USERS_BASE_URL}users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = response.data.user;
      // console.log("User Data:", userData);

      setUser(userData);
      dispatch(setUserDetails({ user: userData }));

    } catch (err) {
      console.error("Error fetching user details:", err);
      toast.error(err.response?.data?.errors || "login again", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    fetchUsersDetails();
  }, []);

  return (
    <Context.Provider value={{ user, fetchUsersDetails }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<ProtectedRoutes Component={UserProfile} />} />
        <Route path="/edit-profile/:id" element={<ProtectedRoutes Component={EditUserProfile} />} />
        <Route path="/other-user-profile/:id" element={<ProtectedRoutes Component={OtherUserProfile} />} />
        <Route path="/send-request" element={<ProtectedRoutes Component={SendRequestForm} />} />
        <Route path="/chat" element={<ProtectedRoutes Component={Chat} />} />
        <Route path="/request" element={<ProtectedRoutes Component={Request} />} />
        <Route path="/find-people" element={<ProtectedRoutes Component={FindPeoples} />} />
        <Route path="/skill-marketplace" element={<ProtectedRoutes Component={SkillMarket} />} />
        <Route path="/fresh-graduates" element={<FreshGraduates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<ProtectedRoutes Component={Dashboard} />} />
        <Route path="/user-list" element={<ProtectedRoutes Component={UserList} />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/call/:id" element={<ProtectedRoutes Component={VideoCall} />} />
        <Route path="universitis-collaboration" element={<CollaborationWithUniversities />} />
        <Route path="/Institution-Join-Form" element={<InstitutionJoinPage />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
