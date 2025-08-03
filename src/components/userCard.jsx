// import { useDispatch } from "react-redux";
// import BASE_URL from "../utils/constants";
// import axios from "axios";
// import { removeUserFromFeed } from "../utils/feedSlice";


//   const DEFAULT_AVATAR =
//   "https://raw.githubusercontent.com/vaibhavkachare/dark-avatar/main/dark-profile.png";
// ;

// const UserCard = ({ user, onLike, onPass }) => {
//   const dispatch= useDispatch();
//   if (!user) return null;

//   const {
//     _id,
//     firstName = "",
//     lastName = "",
//     age,
//     gender,
//     about = "No bio provided",
//     photoUrl,
//   } = user;

//   const fullName = `${firstName} ${lastName}`.trim();

//   const handleSendRequest= async (status,userId)=>{

//     try{
//       const res=await axios.post(BASE_URL + "/request/send/" + status +"/"+ userId,{},
//         {withCredentials: true}
//       );
//       dispatch(removeUserFromFeed(userId));
//       console.log("Request: "+ status);
      
//     }catch(err){
//       console.error("Request failed:", err);

//     }
//   }

//   return (
//     <div className="w-80 rounded-xl shadow-lg bg-gray-900 cursor-pointer select-none transform transition-transform duration-300 ease-in-out hover:scale-105">
//       {/* Photo section */}
//       <div className="w-full h-96 overflow-hidden rounded-t-xl bg-gray-900">
//         <img
//           src={photoUrl || DEFAULT_AVATAR}
//           alt={`${fullName || "User"}'s profile`}
//           className="w-full h-full object-cover"
//           onError={(e) => (e.target.src = DEFAULT_AVATAR)}
//         />
//       </div>
//       <div className="p-4 text-white">
//         <h2 className="text-2xl font-bold">
//           {fullName}
//           {age && <span className="ml-2 font-normal text-gray-300">{`, ${age}`}</span>}
//         </h2>
//         {gender && (
//           <p className="uppercase tracking-wide text-sm text-gray-400 mt-1">
//             {gender}
//           </p>
//         )}
//         <p className="mt-3 text-gray-300 text-sm leading-relaxed h-16 overflow-hidden">
//           {about}
//         </p>

//         {/* Action buttons */}
//         <div className="flex justify-center space-x-8 mt-6">
//           <button
//             aria-label="Pass"
//             className="w-16 h-16 rounded-full border-2 border-red-400 text-red-400 text-4xl flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:scale-110"
//             onClick={()=> handleSendRequest("ignored",_id)}
//           >
//             ×
//           </button>
//           <button
//             aria-label="Like"
//             className="w-16 h-16 rounded-full border-2 border-green-400 text-green-400 text-3xl flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:scale-110"
//             onClick={()=> handleSendRequest("interested",_id)}
//           >
//             ♥
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;





// import { useDispatch } from "react-redux";
// import BASE_URL from "../utils/constants";
// import axios from "axios";
// import { removeUserFromFeed } from "../utils/feedSlice";
// import React, { useState } from "react";

// const DEFAULT_AVATAR =
//   "https://raw.githubusercontent.com/vaibhavkachare/dark-avatar/main/dark-profile.png";

// const UserCard = ({ user }) => {
//   const dispatch = useDispatch();
//   const [imgError, setImgError] = useState(false);
//   const [aboutVisible, setAboutVisible] = useState(false);
//   if (!user) return null;

//   const {
//     _id,
//     firstName = "",
//     lastName = "",
//     age,
//     gender,
//     about = "No bio provided",
//     photoUrl,
//       socialLinks= {}
//   } = user;

// const {
//   github = "",
//   linkedIn = "",
//   x = "",
//   leetcode = "",
//   gfg = ""
// } = socialLinks;

//   const fullName = `${firstName} ${lastName}`.trim();
//   const initials =
//     (firstName[0] || "") + (lastName[0] || "");

//   const handleSendRequest = async (status, userId) => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/request/send/" + status + "/" + userId,
//         {},
//         { withCredentials: true }
//       );
//       dispatch(removeUserFromFeed(userId));
//       // toast or notification logic can go here
//     } catch (err) {
//       console.error("Request failed:", err);
//     }
//   };

//   return (
//     <div
//       className="group relative w-80 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md overflow-hidden select-none transform transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_48px_rgba(111,58,255,0.25)] cursor-pointer"
//       onMouseEnter={() => setAboutVisible(true)}
//       onMouseLeave={() => setAboutVisible(false)}
//     >
//       {/* Photo section */}
//       <div className="w-full h-72 bg-gray-950 relative overflow-hidden rounded-t-2xl">
//         {(!imgError && photoUrl) ? (
//           <img
//             src={photoUrl}
//             alt={`${fullName}'s profile`}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             onError={() => setImgError(true)}
//             draggable={false}
//           />
//         ) : (
//           <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-purple-800/90 to-gray-700/90 text-white text-4xl font-extrabold tracking-wide select-none">
//             {initials}
//           </div>
//         )}

//         {/* glass overlay with shimmer */}
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />

//         {/* fade-in about on hover */}
//         <div
//           className={`absolute bottom-0 left-0 w-full p-5 flex flex-col items-start bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all rounded-b-2xl
//           ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"} duration-500`}
//         >
//           <p className="text-sm text-gray-100">{about}</p>
//         </div>
//       </div>

//       {/* Glass Info Panel */}
//       <div className="relative z-10 px-6 pt-6 pb-4 bg-white/10 backdrop-blur-md rounded-b-2xl shadow-lg">
//         <h2 className="text-2xl font-bold text-white flex items-center gap-2">
//           {fullName}
//           {age && (
//             <span className="ml-1 text-lg font-light text-purple-200 animate-fadein">{`, ${age}`}</span>
//           )}
//         </h2>
//         {gender && (
//           <span className="uppercase text-xs text-purple-300 tracking-widest mt-0.5 block">
//             {gender}
//           </span>
//         )}

//         {/* Actions */}
//         <div className="flex justify-center gap-8 mt-6">
//           <button
//             aria-label="Pass"
//             className="w-14 h-14 rounded-full border-2 border-red-400 text-red-400 text-3xl flex items-center justify-center shadow-md bg-white/5 backdrop-blur transition-all duration-200 hover:text-white hover:bg-red-500/80 hover:scale-110 hover:shadow-2xl active:scale-90 focus:outline-none focus:ring-2 focus:ring-red-300"
//             onClick={() => handleSendRequest("ignored", _id)}
//           >
//             ×
//           </button>
//           <button
//             aria-label="Like"
//             className="w-14 h-14 rounded-full border-2 border-green-400 text-green-400 text-2xl flex items-center justify-center shadow-md bg-white/5 backdrop-blur transition-all duration-200 hover:text-white hover:bg-green-500/80 hover:scale-110 hover:shadow-2xl active:scale-90 focus:outline-none focus:ring-2 focus:ring-green-300"
//             onClick={() => handleSendRequest("interested", _id)}
//           >
//             ♥
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;



import { useDispatch } from "react-redux";
import BASE_URL from "../utils/constants";
import axios from "axios";
import { removeUserFromFeed } from "../utils/feedSlice";
import React, { useState } from "react";
import { Github, Linkedin, Twitter, Code, Globe } from "lucide-react"; // Import relevant icons

const DEFAULT_AVATAR =
  "https://raw.githubusercontent.com/vaibhavkachare/dark-avatar/main/dark-profile.png";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [imgError, setImgError] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  if (!user) return null;

  const {
    _id,
    firstName = "",
    lastName = "",
    age,
    gender,
    about = "No bio provided",
    photoUrl,
    socialLinks = {}
  } = user;

  const {
    github = "",
    linkedIn = "",
    x = "",
    leetcode = "",
    gfg = ""
  } = socialLinks;

  const fullName = `${firstName} ${lastName}`.trim();
  const initials = (firstName[0] || "") + (lastName[0] || "");

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error("Request failed:", err);
    }
  };

  // Array of social links for easy rendering
  const socialPlatforms = [
    { name: "GitHub", url: github, icon: <Github className="w-5 h-5" /> },
    { name: "LinkedIn", url: linkedIn, icon: <Linkedin className="w-5 h-5" /> },
    { name: "X", url: x, icon: <Twitter className="w-5 h-5" /> },
    { name: "LeetCode", url: leetcode, icon: <Code className="w-5 h-5" /> },
    { name: "GFG", url: gfg, icon: <Globe className="w-5 h-5" /> },
  ].filter(platform => platform.url); // Filter out empty URLs

  return (
    <div
      className="group relative w-80 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md overflow-hidden select-none transform transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_48px_rgba(111,58,255,0.25)] cursor-pointer"
      onMouseEnter={() => setAboutVisible(true)}
      onMouseLeave={() => setAboutVisible(false)}
    >
      {/* Photo section */}
      <div className="w-full h-72 bg-gray-950 relative overflow-hidden rounded-t-2xl">
        {(!imgError && photoUrl) ? (
          <img
            src={photoUrl}
            alt={`${fullName}'s profile`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
            draggable={false}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-purple-800/90 to-gray-700/90 text-white text-4xl font-extrabold tracking-wide select-none">
            {initials}
          </div>
        )}

        {/* glass overlay with shimmer */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />

        {/* fade-in about on hover */}
        <div
          className={`absolute bottom-0 left-0 w-full p-5 flex flex-col items-start bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all rounded-b-2xl
          ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"} duration-500`}
        >
          <p className="text-sm text-gray-100">{about}</p>
        </div>
      </div>

      {/* Glass Info Panel */}
      <div className="relative z-10 px-6 pt-6 pb-4 bg-white/10 backdrop-blur-md rounded-b-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          {fullName}
          {age && (
            <span className="ml-1 text-lg font-light text-purple-200 animate-fadein">{`, ${age}`}</span>
          )}
        </h2>
        {gender && (
          <span className="uppercase text-xs text-purple-300 tracking-widest mt-0.5 block">
            {gender}
          </span>
        )}

        {/* Social Links Section */}
        {socialPlatforms.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            {socialPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-purple-300 hover:text-purple-100 transition-colors duration-200"
                aria-label={platform.name}
              >
                {platform.icon}
                <span className="text-sm font-medium group-hover:underline">{platform.name}</span>
              </a>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-center gap-8 mt-6">
          <button
            aria-label="Pass"
            className="w-14 h-14 rounded-full border-2 border-red-400 text-red-400 text-3xl flex items-center justify-center shadow-md bg-white/5 backdrop-blur transition-all duration-200 hover:text-white hover:bg-red-500/80 hover:scale-110 hover:shadow-2xl active:scale-90 focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            ×
          </button>
          <button
            aria-label="Like"
            className="w-14 h-14 rounded-full border-2 border-green-400 text-green-400 text-2xl flex items-center justify-center shadow-md bg-white/5 backdrop-blur transition-all duration-200 hover:text-white hover:bg-green-500/80 hover:scale-110 hover:shadow-2xl active:scale-90 focus:outline-none focus:ring-2 focus:ring-green-300"
            onClick={() => handleSendRequest("interested", _id)}
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
