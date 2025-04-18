import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EditUserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [skillyouoffre, setSkillYouOffer] = useState("");
  const [skillyouwant, setSkillYouWant] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_USERS_BASE_URL}all/users`);
        const userList = res?.data?.allUsers;
        const foundUser = userList.find((user) => user._id === id);
        if (foundUser) {
          setName(foundUser.name || "");
          setBio(foundUser.bio || "");
          setEmail(foundUser.email || "");
          setAddress(foundUser.address || "");
          setSkillYouOffer(foundUser.skillyouoffre || "");
          setSkillYouWant(foundUser.skillyouwant || "");
          setStatus(foundUser.status || "");
        }
      } catch (err) {
        toast.error("Failed to load profile");
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      bio,
      email,
      skillyouoffre,
      skillyouwant,
      address,
      status,
    };

    try {
      const updatedUser = await axios.put(
        `${import.meta.env.VITE_USERS_BASE_URL}users/profile/update/${id}`,
        userData
      );
      // console.log("Updated User", updatedUser);
      toast.success("Profile updated successfully!");
      navigate(`/user-profile`);
    } catch (err) {
      toast.error("Failed to update profile");
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full min-h-screen bg-gradient-to-t from-gray-100 to-blue-700 flex items-center justify-center p-6"
      >
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold font-Poppins text-blue-700 mb-6 text-center">
            Edit Your Profile
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            {/* Name */}
            <div>
              <label className="text-sm text-gray-600 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="text-sm text-gray-600 font-semibold">Bio</label>
              <textarea
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Skills Offered */}
            <div>
              <label className="text-sm text-gray-600 font-semibold">Skill You Offer</label>
              <input
                type="text"
                name="skillyouoffre"
                value={skillyouoffre}
                onChange={(e) => setSkillYouOffer(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Skills Wanted */}
            <div>
              <label className="text-sm text-gray-600 font-semibold">Skill You Want</label>
              <input
                type="text"
                name="skillyouwant"
                value={skillyouwant}
                onChange={(e) => setSkillYouWant(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Address */}
            <div>
              <label className="text-sm text-gray-600 font-semibold">Address</label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Status */}
            <div>
              <label className="text-sm text-gray-600 font-semibold">Status</label>
              <input
                type="text"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Submit */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md font-semibold"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default EditUserProfile;
