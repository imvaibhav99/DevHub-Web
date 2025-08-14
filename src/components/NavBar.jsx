
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



import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../utils/constants';
import { removeUser } from '../utils/userSlice';
import { addRequests } from '../utils/requestSlice';
import { createPortal } from 'react-dom';

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, right: 0 });
  const avatarRef = useRef(null);
  const portalRoot = typeof window !== 'undefined' ? document.body : null;

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

  // Poll for incoming requests so the red dot updates near-real-time
  useEffect(() => {
    let isMounted = true;

    const fetchRequests = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/user/requests/received`, {
          withCredentials: true,
        });
        if (!isMounted) return;
        dispatch(addRequests(res.data?.data || []));
      } catch (err) {
        // Fail silently
      }
    };

    fetchRequests();
    const intervalId = setInterval(fetchRequests, 3000);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [dispatch]);

  // position and outside click handling for portal menu
  const openMenu = () => {
    if (!avatarRef.current) return;
    const rect = avatarRef.current.getBoundingClientRect();
    const top = Math.round(rect.bottom + 10);
    const right = Math.round(window.innerWidth - rect.right);
    setMenuPos({ top, right });
    setMenuOpen(true);
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e) => {
      if (!avatarRef.current) return;
      if (avatarRef.current.contains(e.target)) return; // clicks on avatar toggle
      closeMenu();
    };
    const onResize = () => {
      if (!avatarRef.current) return;
      const rect = avatarRef.current.getBoundingClientRect();
      setMenuPos({ top: Math.round(rect.bottom + 10), right: Math.round(window.innerWidth - rect.right) });
    };
    window.addEventListener('mousedown', onClick);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize, true);
    return () => {
      window.removeEventListener('mousedown', onClick);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize, true);
    };
  }, [menuOpen]);

  // Check if there are new requests
  const hasNewRequests = Array.isArray(requests) && requests.length > 0;

  return (
    <nav className="top-0 left-0 w-full bg-gradient-to-r from-blue-950/90 via-indigo-900/80 to-teal-900/80 backdrop-blur-xl border-b border-cyan-500/40 shadow-xl z-[100000] overflow-visible">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo / Brand */}
        <Link
          to="/feed"
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent select-none drop-shadow hover:scale-105 transition-transform"
        >
          DevHub
        </Link>

        {/* User Section */}
        <div className="flex items-center gap-3 relative z-[100001]">
          {user ? (
            <>
              <span className="text-md font-medium text-purple-200 bg-white/5 px-3 py-1 rounded-lg shadow-md mr-1 hidden sm:inline-block">
                Welcome {user.firstName}
              </span>
              <button
                ref={avatarRef}
                type="button"
                onClick={() => (menuOpen ? closeMenu() : openMenu())}
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
              </button>

              {menuOpen && portalRoot && createPortal(
                <div
                  className="fixed z-[2147483647]"
                  style={{ top: `${menuPos.top}px`, right: `${menuPos.right}px` }}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <ul className="menu menu-md bg-white/10 backdrop-blur-md border border-purple-400/20 rounded-2xl shadow-xl py-3 px-2">
                    <li>
                      <button type="button" onClick={() => { closeMenu(); navigate('/profile'); }} className="text-left hover:bg-purple-100/20 rounded-lg transition w-full">
                        Profile
                      </button>
                    </li>
                    <li>
                      <button type="button" onClick={() => { closeMenu(); navigate('/connections'); }} className="text-left hover:bg-purple-100/20 rounded-lg transition w-full">
                        Connections
                      </button>
                    </li>
                    <li className="relative">
                      <button type="button" onClick={() => { closeMenu(); navigate('/requests'); }} className="text-left hover:bg-purple-100/20 rounded-lg transition w-full relative">
                        Requests
                        {hasNewRequests && (
                          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg border border-white/20"></span>
                        )}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => { closeMenu(); handleLogout(); }}
                        className="text-left w-full text-red-400 hover:bg-red-900/30 hover:text-white rounded-lg transition"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>,
                portalRoot
              )}
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
