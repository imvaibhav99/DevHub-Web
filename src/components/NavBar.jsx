// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BASE_URL from '../utils/constants';
// import { removeUser } from '../utils/userSlice';
// import { addFeed } from '../utils/feedSlice'; 


// const NavBar = () => {
//   const user = useSelector((store) => store.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

// const handleLogout = async () => {
//   try {
//     const res = await axios.post(BASE_URL + "/logout",{}, { withCredentials: true });
//     console.log("Logout successful", res.data);
//     dispatch(removeUser());    //remove user data from the Redux store
//     navigate("/login");  
//   } catch (err) {
//     console.error("Logout failed:", err);
//   }
// };


//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="flex-1">
//         <Link to="/feed" className="btn btn-ghost text-xl">DevHub</Link>
//       </div>

//       <div className="flex gap-2 items-center">
//         {user ? (
//           <>
//           <p className="text-sm font-medium px-2">Welcome {user.firstName}</p>
//             <div className="dropdown dropdown-end">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost btn-circle avatar"
//               >
//                 <div className="w-10 rounded-full">
//                   <img
//                     alt="User"
//                     src={user.photoUrl || `https://ui-avatars.com/api/?name=${user.firstName || 'User'}`}
//                   />
                   
//                 </div>
//               </div>
             
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
//               >
                
//                 <li>
//                   <Link to="/profile" className="justify-between">
//                     Profile
//                   </Link>
//                 </li>
//                 <li><Link to="/connections">Connections</Link></li>
//                 <li><Link to="/requests">Requests</Link></li>
//                 <li><button onClick={handleLogout}>Logout</button></li>
//               </ul>
//             </div>
            
//           </>
//         ) : (
//           <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavBar;



// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BASE_URL from '../utils/constants';
// import { removeUser } from '../utils/userSlice';

// const NavBar = () => {
//   const user = useSelector((store) => store.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const res = await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
//       dispatch(removeUser());
//       navigate("/login");
//     } catch (err) {
//       console.error("Logout failed:", err);
//     }
//   };

//   // Avatar fallback uses initials, no blank faces!
//   const getAvatarUrl = () => {
//     if (user?.photoUrl && user.photoUrl.length > 6) return user.photoUrl;
//     const initials = `${user?.firstName?.[0] || "U"}${user?.lastName?.[0] || ""}`;
//     return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=755fe2&color=fff&rounded=true`;
//   };

//   return (
//     <nav className=" top-0 left-0 w-full bg-gradient-to-r from-blue-950/90 via-indigo-900/80 to-teal-900/80 backdrop-blur-xl border-b border-cyan-500/40 shadow-xl shadow-blue-900/10 z-30">
//       <div className="container mx-auto flex items-center justify-between py-2 px-4">
//         {/* Brand */}
//         <Link
//           to="/feed"
//           className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent select-none drop-shadow hover:scale-105 transition-transform"
//         >
//           DevHub
//         </Link>

//         {/* User Actions */}
//         <div className="flex items-center gap-3">
//           {user ? (
//             <>
//               <span className="text-md font-medium text-purple-200 bg-white/5 px-3 py-1 rounded-lg shadow-md mr-1 hidden sm:inline-block">
//                 Welcome  {user.firstName}
//               </span>
//               <div className="dropdown dropdown-end">
//                 <label tabIndex={0} className="btn btn-ghost btn-circle avatar transition hover:ring-2 hover:ring-purple-300 hover:scale-110">
//                   <div className="w-11 rounded-full ring-2 ring-purple-500/40 shadow-lg">
//                     <img
//                       alt="User"
//                       src={getAvatarUrl()}
//                       className="object-cover"
//                       draggable={false}
//                     />
//                   </div>
//                 </label>
//                 <ul tabIndex={0} className="menu menu-md dropdown-content bg-white/10 backdrop-blur-md border border-purple-400/20 rounded-2xl shadow-xl mt-3 py-3 px-2 z-30">
//                   <li>
//                     <Link to="/profile" className="hover:bg-purple-100/20 rounded-lg transition">Profile</Link>
//                   </li>
//                   <li>
//                     <Link to="/connections" className="hover:bg-purple-100/20 rounded-lg transition">Connections</Link>
//                   </li>
//                   <li>
//                     <Link to="/requests" className="hover:bg-purple-100/20 rounded-lg transition">Requests</Link>
//                   </li>
//                   <li>
//                     <button
//                       onClick={handleLogout}
//                       className="text-red-400 hover:bg-red-900/30 hover:text-white rounded-lg transition">Logout</button>
//                   </li>
//                 </ul>
//               </div>
//             </>
//           ) : (
//             <Link
//               to="/login"
//               className="btn btn-outline btn-sm rounded-xl ring-1 ring-purple-500/80 hover:bg-purple-500/80 hover:text-white transition font-semibold"
//             >
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;



import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../utils/constants';
import { removeUser } from '../utils/userSlice';

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const getAvatarUrl = () => {
    if (user?.photoUrl && user.photoUrl.length > 6) return user.photoUrl;
    const initials = `${user?.firstName?.[0] || "U"}${user?.lastName?.[0] || ""}`;
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=755fe2&color=fff&rounded=true`;
  };

  return (
    <nav className="top-0 left-0 w-full bg-gradient-to-r from-blue-950/90 via-indigo-900/80 to-teal-900/80 backdrop-blur-xl border-b border-cyan-500/40 shadow-xl z-30">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo / Brand */}
        <Link
          to="/feed"
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent select-none drop-shadow hover:scale-105 transition-transform"
        >
          DevHub
        </Link>

        {/* User Section */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-md font-medium text-purple-200 bg-white/5 px-3 py-1 rounded-lg shadow-md mr-1 hidden sm:inline-block">
                Welcome {user.firstName}
              </span>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar transition hover:ring-2 hover:ring-purple-300 hover:scale-110"
                >
                  <div className="w-11 rounded-full ring-2 ring-purple-500/40 shadow-lg">
                    <img
                      alt="User"
                      src={getAvatarUrl()}
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-md dropdown-content bg-white/10 backdrop-blur-md border border-purple-400/20 rounded-2xl shadow-xl mt-3 py-3 px-2 z-30"
                >
                  <li>
                    <Link to="/profile" className="hover:bg-purple-100/20 rounded-lg transition">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/connections" className="hover:bg-purple-100/20 rounded-lg transition">
                      Connections
                    </Link>
                  </li>
                  <li>
                    <Link to="/requests" className="hover:bg-purple-100/20 rounded-lg transition">
                      Requests
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-red-400 hover:bg-red-900/30 hover:text-white rounded-lg transition"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline btn-sm rounded-xl ring-1 ring-purple-500/80 hover:bg-purple-500/80 hover:text-white transition font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
