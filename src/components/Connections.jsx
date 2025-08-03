
// import React, { useEffect } from 'react';
// import axios from 'axios';
// import BASE_URL from '../utils/constants';
// import { useDispatch, useSelector } from 'react-redux';
// import { addConnections } from '../utils/connectionSlice';

// const Connections = () => {
//   const dispatch = useDispatch();
//   const connections = useSelector((state) => state.connections);

//   const fetchConnections = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/user/connections`, {
//         withCredentials: true,
//       });
//       dispatch(addConnections(res.data.data));
//     } catch (err) {
//       console.error('Error fetching connections:', err);
//     }
//   };

//   useEffect(() => {
//     fetchConnections();
//   }, []);

//   return (
//     <div className="p-4 w-full">
//       <h1 className="text-2xl font-bold mb-4">Your Connections</h1>
//       <div className="flex flex-col gap-4">
//         {connections && connections.map((conn) => (
//           <div
//             key={conn._id}
//             className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-200 w-full"
//           >
//             <div className="card-body flex flex-row items-center gap-6 w-full">
//               <img
//                 className="w-16 h-16 rounded-full object-cover border border-gray-300"
//                 src={conn.photoUrl || 'https://raw.githubusercontent.com/vaibhavkachare/dark-avatar/main/dark-profile.png'}
//                 alt="profile"
//               />
//               <div className="flex-1">
//                 <h2 className="card-title text-lg font-semibold">{conn.firstName} {conn.lastName}</h2>
//                 <p className="text-sm text-gray-100 font-semibold">{conn.age }</p>
//                 <p className="text-sm text-gray-100 font-semibold">{conn.gender }</p>
//                 <p className="text-sm text-gray-100 font-semibold">{conn.about || 'No bio available'}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Connections;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';

const AVATAR_FALLBACK =
  "https://raw.githubusercontent.com/vaibhavkachare/dark-avatar/main/dark-profile.png";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.connections);
  const [loading, setLoading] = useState(false);

  const fetchConnections = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error('Error fetching connections:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="min-h-screen w-full px-4 py-8 bg-gradient-to-br from-gray-950 via-purple-950/90 to-[#120922] flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-12 text-center 
                     bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
        
      </h1>

      {loading ? (
        <div className="flex flex-col items-center gap-3">
          <span className="loading loading-spinner loading-lg text-purple-500" />
          <p className="text-purple-300 text-lg animate-pulse">Loading connections...</p>
        </div>
      ) : connections && connections.length > 0 ? (
        <div className="flex flex-col gap-6 w-full max-w-4xl">
          {connections.map((conn, idx) => {
            const hasPhoto = conn.photoUrl && conn.photoUrl.trim().length > 6;
            const initials =
              (conn.firstName?.[0] || "") + (conn.lastName?.[0] || "");
            return (
              <div
                key={conn._id}
                className="card bg-white/10 backdrop-blur-md shadow-lg border border-white/10 rounded-3xl transition-transform transform hover:scale-[1.03] hover:shadow-2xl flex"
                style={{ animationDelay: `${idx * 0.05}s`, animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.7s', animationTimingFunction: 'cubic-bezier(.32,1.2,.36,1)' }}
              >
                <div className="flex items-center gap-6 p-6 w-full">
                  {hasPhoto ? (
                    <img
                      className="w-16 h-16 rounded-full object-cover border-2 border-purple-400 shadow-md flex-shrink-0"
                      src={conn.photoUrl}
                      alt={`${conn.firstName} ${conn.lastName}`}
                      onError={(e) => (e.target.src = AVATAR_FALLBACK)}
                    />
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-full bg-gradient-to-br from-purple-800 to-pink-600 text-white border-2 border-purple-400 shadow-md flex-shrink-0 select-none">
                      {initials}
                    </div>
                  )}

                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold text-white">
                      {conn.firstName} {conn.lastName}
                    </h2>
                    <div className="flex flex-wrap gap-3 mt-1">
                      {conn.age && (
                        <span className="bg-purple-700/70 text-purple-200 px-3 py-1 rounded-full text-xs font-semibold">
                          Age: {conn.age}
                        </span>
                      )}
                      {conn.gender && (
                        <span className="bg-pink-700/70 text-pink-200 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                          {conn.gender}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-purple-100 italic max-w-xl truncate">
                      {conn.about || "No bio available"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-32 bg-white/10 backdrop-blur-md p-12 rounded-3xl shadow-xl max-w-md text-center text-purple-300">
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24" className="mb-6">
            <path fill="currentColor" d="M17.5 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM6.5 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM21 20.875C21 18.657 16.107 17 12 17s-9 1.657-9 3.875C3 22.142 5.927 23 12 23c6.073 0 9-.858 9-2.125zm1-14.25c0-2.338-7-3.625-10-3.625S2 4.287 2 6.625c0 1.012 1.424 1.985 4.133 2.56a15.033 15.033 0 00.647 2.095C3.606 11.763 2 13.198 2 15c0 2.138 5.286 3.875 10 3.875s10-1.737 10-3.875c0-1.802-1.606-3.237-4.78-4.72.19-.633.444-1.388.647-2.095C21.576 8.61 23 7.637 23 6.625z" />
          </svg>
          <h2 className="text-2xl font-semibold mb-2">No Connections Found</h2>
          <p className="text-gray-400 max-w-xs">
            You don’t have any connections yet.
            <br />
            Start connecting with developers around you!
          </p>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Connections;
