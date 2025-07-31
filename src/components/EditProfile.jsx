import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import BASE_URL from "../utils/constants.js";
import UserCard from "./UserCard.jsx";

const EditProfile = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((store) => store.user);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [skills, setSkills] = useState("");

  const allowedEditFields = [
    "firstName",
    "lastName",
    "photoUrl",
    "about",
    "gender",
    "age",
    "skills",
  ];

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(BASE_URL + "/profile/view", {
          withCredentials: true,
        });

        const data = res.data;
        if (!data) return;

        dispatch(addUser(data));
        setFirstName(data.firstName || "");
        setLastName(data.lastName || "");
        setPhotoUrl(data.photoUrl || "");
        setAbout(data.about || "");
        setGender(data.gender || "");
        setAge(data.age || "");
        setSkills(data.skills?.join(", ") || "");
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        firstName,
        lastName,
        photoUrl,
        about,
        gender,
        age,
        skills,
      };

      const res = await axios.patch(`${BASE_URL}/profile/edit`, payload, {
        withCredentials: true,
      });
      setErrorMsg("");
      setSuccessMsg("Profile updated successfully."); 
       setTimeout(() => {
      setSuccessMsg("");
    }, 3000);
      
    } catch (err) {
    const message =
    err?.response?.data || "Something went wrong. Please try again.";
    setErrorMsg(message);
    }
  };

  const currentUser = {
    firstName,
    lastName,
    age,
    gender,
    about,
    photoUrl,
  };

  return (
 

    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full lg:w-1/2 space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Edit Your Profile
          </h2>

          {allowedEditFields.includes("firstName") && (
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          )}

          {allowedEditFields.includes("lastName") && (
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          )}

          {allowedEditFields.includes("photoUrl") && (
            <input
              type="text"
              placeholder="Photo URL"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          )}

          {allowedEditFields.includes("about") && (
            <textarea
              placeholder="About"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          )}

          {allowedEditFields.includes("gender") && (
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          )}

          {allowedEditFields.includes("age") && (
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          )}

          {allowedEditFields.includes("skills") && (
            <input
              type="text"
              placeholder="Skills (comma separated)"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          )}

 {errorMsg && (
  <div
    role="alert"
    className="alert alert-error bg-red-800 text-white px-4 py-3 rounded-lg flex items-center gap-3"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 stroke-current text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span>{errorMsg}</span>
  </div>
)}

{successMsg && (
  <div
    role="alert"
    className="alert alert-success bg-green-800 text-white px-4 py-3 rounded-lg flex items-center gap-3"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 stroke-current text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
    <span>{successMsg}</span>
  </div>
)}

<button
  type="submit"
  className="w-full py-3 bg-green-600 hover:bg-green-700 transition rounded-lg font-semibold text-white"
>
  Save Changes
</button>



        </form>

        {/* Live Preview Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-center lg:text-left">
            Your Profile Card
          </h2>
          <UserCard user={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;


