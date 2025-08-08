// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser } from "../utils/userSlice.js";
// import BASE_URL from "../utils/constants.js";
// import UserCard from "./UserCard.jsx";

// const EditProfile = () => {
//   const dispatch = useDispatch();
//   const loggedInUser = useSelector((store) => store.user);
//   const [errorMsg, setErrorMsg] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");


//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [photoUrl, setPhotoUrl] = useState("");
//   const [about, setAbout] = useState("");
//   const [gender, setGender] = useState("");
//   const [age, setAge] = useState("");
//   const [skills, setSkills] = useState("");

//   const allowedEditFields = [
//     "firstName",
//     "lastName",
//     "photoUrl",
//     "about",
//     "gender",
//     "age",
//     "skills",
//   ];

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const res = await axios.get(BASE_URL + "/profile/view", {
//           withCredentials: true,
//         });

//         const data = res.data;
//         if (!data) return;

//         dispatch(addUser(data));
//         setFirstName(data.firstName || "");
//         setLastName(data.lastName || "");
//         setPhotoUrl(data.photoUrl || "");
//         setAbout(data.about || "");
//         setGender(data.gender || "");
//         setAge(data.age || "");
//         setSkills(data.skills?.join(", ") || "");
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         firstName,
//         lastName,
//         photoUrl,
//         about,
//         gender,
//         age,
//         skills,
//       };

//       const res = await axios.patch(`${BASE_URL}/profile/edit`, payload, {
//         withCredentials: true,
//       });
//       setErrorMsg("");
//       setSuccessMsg("Profile updated successfully."); 
//        setTimeout(() => {
//       setSuccessMsg("");
//     }, 3000);
      
//     } catch (err) {
//     const message =
//     err?.response?.data || "Something went wrong. Please try again.";
//     setErrorMsg(message);
//     }
//   };

//   const currentUser = {
//     firstName,
//     lastName,
//     age,
//     gender,
//     about,
//     photoUrl,
//   };

//   return (
 

//     <div className="min-h-screen bg-gray-950 text-white p-6">
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
//         {/* Form Section */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full lg:w-1/2 space-y-6"
//         >
//           <h2 className="text-3xl font-bold text-center text-white mb-6">
//             Edit Your Profile
//           </h2>

//           {allowedEditFields.includes("firstName") && (
//             <input
//               type="text"
//               placeholder="First Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           )}

//           {allowedEditFields.includes("lastName") && (
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           )}

//           {allowedEditFields.includes("photoUrl") && (
//             <input
//               type="text"
//               placeholder="Photo URL"
//               value={photoUrl}
//               onChange={(e) => setPhotoUrl(e.target.value)}
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           )}

//           {allowedEditFields.includes("about") && (
//             <textarea
//               placeholder="About"
//               value={about}
//               onChange={(e) => setAbout(e.target.value)}
//               rows={4}
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           )}

//           {allowedEditFields.includes("gender") && (
//             <select
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           )}

//           {allowedEditFields.includes("age") && (
//             <input
//               type="number"
//               placeholder="Age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           )}

//           {allowedEditFields.includes("skills") && (
//             <input
//               type="text"
//               placeholder="Skills (comma separated)"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           )}

//  {errorMsg && (
//   <div
//     role="alert"
//     className="alert alert-error bg-red-800 text-white px-4 py-3 rounded-lg flex items-center gap-3"
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       className="h-6 w-6 shrink-0 stroke-current text-white"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//       />
//     </svg>
//     <span>{errorMsg}</span>
//   </div>
// )}

// {successMsg && (
//   <div
//     role="alert"
//     className="alert alert-success bg-green-800 text-white px-4 py-3 rounded-lg flex items-center gap-3"
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       className="h-6 w-6 shrink-0 stroke-current text-white"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M5 13l4 4L19 7"
//       />
//     </svg>
//     <span>{successMsg}</span>
//   </div>
// )}

// <button
//   type="submit"
//   className="w-full py-3 bg-green-600 hover:bg-green-700 transition rounded-lg font-semibold text-white"
// >
//   Save Changes
// </button>



//         </form>

//         {/* Live Preview Section */}
//         <div className="w-full lg:w-1/2 space-y-6">
//           <h2 className="text-2xl font-semibold text-center lg:text-left">
//             Your Profile Card
//           </h2>
//           <UserCard user={currentUser} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import BASE_URL from "../utils/constants.js";
import UserCard from "./userCard.jsx";

const GENDER_OPTIONS = [
  { value: "", label: "Select Gender" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" }
];

const EditProfile = () => {
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [skills, setSkills] = useState(""); // comma string
  const [github, setGithub] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [x, setX] = useState("");
  const [leetcode, setLeetcode] = useState("");
  const [gfg, setGfg] = useState("");

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
        setGithub(data?.socialLinks?.github || "");
        setLinkedIn(data?.socialLinks?.linkedIn || "");
        setX(data?.socialLinks?.x || "");
        setLeetcode(data?.socialLinks?.leetcode || "");
        setGfg(data?.socialLinks?.gfg || "");
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchUserProfile();
  }, [dispatch]);

  const isValidProfileURL = (url, platform) => {
    if (!url) return true; // Allow empty links
    try {
      const parsed = new URL(url);
      const hostname = parsed.hostname.toLowerCase();
      const pathname = parsed.pathname.toLowerCase();
      switch (platform) {
        case "github":
          return hostname.includes("github.com") && pathname.length > 1;
        case "linkedIn":
          return hostname.includes("linkedin.com") && pathname.includes("/in/");
        case "x":
          return hostname.includes("x.com") && pathname.length > 1;
        case "leetcode":
          return hostname.includes("leetcode.com") && pathname.length > 1;
        case "gfg":
          return hostname.includes("geeksforgeeks.org") && pathname.includes("/user/");
        default:
          return false;
      }
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    // Basic required field validation
    if (!firstName || !lastName || !age) {
      setErrorMsg("Please fill in required fields: First Name, Last Name, and Age.");
      return;
    }

    // URL validation
    const platforms = { github, linkedIn, x, leetcode, gfg };
    for (let [platform, url] of Object.entries(platforms)) {
      if (!isValidProfileURL(url, platform)) {
        setErrorMsg(`Invalid ${platform.charAt(0).toUpperCase() + platform.slice(1)} URL. Please check and try again.`);
        return;
      }
    }

    // Format skills
    const formattedSkills = skills
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const payload = {
      firstName,
      lastName,
      photoUrl,
      about,
      gender,
      age,
      skills: formattedSkills,
      socialLinks: { github, linkedIn, x, leetcode, gfg }
    };

    try {
      const res = await axios.patch(`${BASE_URL}/profile/edit`, payload, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" } // Explicitly set for safety
      });
      setSuccessMsg("Profile updated successfully.");
      setTimeout(() => setSuccessMsg(""), 2500);
    } catch (err) {
      let message = "Something went wrong. Please try again.";
      if (err.response) {
        // Server responded with status code (e.g., 400, 401)
        message = err.response.data?.message || `Server error: ${err.response.status} - ${err.response.statusText}`;
      } else if (err.request) {
        // Request was made but no response (e.g., network issue)
        message = "Network error: No response from server. Check your connection.";
      } else {
        // Other errors (e.g., Axios setup)
        message = err.message || "Request setup error.";
      }
      setErrorMsg(message);
      console.error("Detailed error:", err); // For debugging
    }
  };

  // Skills as array for preview
  const skillsArray = skills
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const currentUser = {
    firstName,
    lastName,
    age,
    gender,
    about,
    photoUrl,
    skills: skillsArray
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/90 to-[#120922] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/10 border border-purple-500/20 shadow-2xl w-full lg:w-1/2 space-y-7 rounded-3xl px-10 py-12 flex flex-col justify-center"
          style={{
            boxShadow:
              "0 8px 40px 0 rgba(111,58,255,.18), 0 2px 40px 0 rgba(199,89,255,0.08)",
          }}
        >
          <h2 className="text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight drop-shadow">
            ✏️ Edit Profile
          </h2>
          <div className="space-y-5">
            {/* First Name */}
            <div>
              <label className="block mb-1 text-base text-purple-100 font-semibold">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                autoComplete="off"
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block mb-1 text-base text-purple-100 font-semibold">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                autoComplete="off"
              />
            </div>
            {/* Photo URL */}
            <div>
              <label className="block mb-1 text-base text-purple-100 font-semibold">
                Avatar Photo URL
              </label>
              <input
                type="text"
                placeholder="Paste image URL"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                autoComplete="off"
              />
            </div>
            {/* About */}
            <div>
              <label className="block mb-1 text-base text-purple-100 font-semibold">
                About <span className="text-purple-300 text-xs">(Show off your vibe!)</span>
              </label>
              <textarea
                placeholder="Who are you? What do you love building?"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                spellCheck={true}
              />
            </div>
            {/* Gender */}
            <div>
              <label className="block mb-1 text-base text-purple-100 font-semibold">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              >
                {GENDER_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            {/* Age */}
            <div>
              <label className="block mb-1 text-base text-purple-100 font-semibold">
                Age
              </label>
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="0"
                max="120"
                step="1"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              />
            </div>
            {/* Skills */}
            <div>
              <label className="block mb-1 text-base text-purple-100 font-semibold">
                Skills <span className="text-purple-300 text-xs">(comma separated)</span>
              </label>
              <input
                type="text"
                placeholder="JavaScript, React, Node.js, ..."
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              />
              {/* Social Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-base text-purple-100 font-semibold">GitHub</label>
                  <input
                    type="url"
                    placeholder="https://github.com/username"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-base text-purple-100 font-semibold">LinkedIn</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    value={linkedIn}
                    onChange={(e) => setLinkedIn(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-base text-purple-100 font-semibold">X (Twitter)</label>
                  <input
                    type="url"
                    placeholder="https://x.com/username"
                    value={x}
                    onChange={(e) => setX(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-base text-purple-100 font-semibold">LeetCode</label>
                  <input
                    type="url"
                    placeholder="https://leetcode.com/username"
                    value={leetcode}
                    onChange={(e) => setLeetcode(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-base text-purple-100 font-semibold">GeeksforGeeks</label>
                  <input
                    type="url"
                    placeholder="https://auth.geeksforgeeks.org/user/username"
                    value={gfg}
                    onChange={(e) => setGfg(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="h-14 flex flex-col justify-center">
            {errorMsg && (
              <div
                role="alert"
                className="alert alert-error bg-red-800/90 text-white px-4 py-3 rounded-lg flex items-center gap-3 animate-slidein"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div
                role="alert"
                className="alert alert-success bg-green-800/90 text-white px-4 py-3 rounded-lg flex items-center gap-3 animate-slidein"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M5 13l4 4L19 7"/>
                </svg>
                <span>{successMsg}</span>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-200 rounded-xl font-bold text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-700/40 active:scale-98"
          >
            Save Changes
          </button>
        </form>

        {/* Live Preview Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center space-y-8">
          <h2 className="text-3xl font-semibold text-center mb-2 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight drop-shadow">
            Live Profile Preview
          </h2>
          <div className="transition-transform duration-500 animate-slideup">
            <UserCard user={currentUser} />
          </div>
        </div>
      </div>

      {/* Advanced slide-in/fade classes */}
      <style>{`
        .animate-slidein {
          animation: slidein 0.4s cubic-bezier(.5,1.8,.5,1) both;
        }
        @keyframes slidein {
          from { opacity: 0; transform: translateY(-18px);}
          to   { opacity: 1; transform: translateY(0);}
        }
        .animate-slideup {
          animation: slideup 0.7s cubic-bezier(.5,1.8,.5,1) 0.2s both;
        }
        @keyframes slideup {
          from { opacity: 0; transform: translateY(24px) scale(.92);}
          to   { opacity: 1; transform: translateY(0) scale(1);}
        }
      `}
      </style>
    </div>
  );
};

export default EditProfile;
