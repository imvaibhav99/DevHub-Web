
// import React, { useEffect } from 'react';
// import axios from 'axios';
// import BASE_URL from '../utils/constants';
// import { useDispatch, useSelector } from 'react-redux';
// import { addRequests } from '../utils/requestSlice';

// const Requests = () => {
//   const dispatch = useDispatch();
//   const requests = useSelector((state) => state.requests);

//   const fetchRequests = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/user/requests/received`, {
//         withCredentials: true,
//       });
//       dispatch(addRequests(res.data.data));
//     } catch (err) {
//       console.error('Error fetching requests:', err);
//     }
//   };

//   const handleReview = async (requestId, status) => {
//     try {
//       await axios.post(
//         `${BASE_URL}/request/review/${status}/${requestId}`,
//         {},
//         { withCredentials: true }
//       );
//       fetchRequests(); // refresh the list after action
//     } catch (error) {
//       console.error(`Failed to ${status} request:`, error);
//     }
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   return (
//     <div className="p-4 w-full">
//   {requests === null ? (
//     <div className="flex justify-center mt-20">
//       <div className="bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-100 p-6 rounded-2xl shadow-lg text-xl font-semibold">
//         Loading...
//       </div>
//     </div>
//   ) : requests.length === 0 ? (
//     <div className="flex justify-center mt-20">
//       <div className="bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-100 p-6 rounded-2xl shadow-lg text-xl font-semibold text-center">
//          No New Requests!
//       </div>
//     </div>
//   ) : (
//     <>
//       <h1 className="text-2xl font-bold mb-4 text-center">Connection Requests</h1>
//       <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
//         {requests.map((req) => {
//           const user = req.fromUserId;
//           return (
//             <div
//               key={req._id}
//               className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-200 w-full"
//             >
//               <div className="card-body flex flex-row items-center justify-between gap-6 w-full">
//                 <div className="flex items-center gap-6">
//                   <img
//                     className="w-16 h-16 rounded-full object-cover border border-gray-300"
//                     src={
//                       user.photoUrl ||
//                       'https://raw.githubusercontent.com/vaibhavkachare/dark-avatar/main/dark-profile.png'
//                     }
//                     alt="profile"
//                   />
//                   <div>
//                     <h2 className="card-title text-lg font-semibold">
//                       {user.firstName} {user.lastName}
//                     </h2>
//                     <p className="text-sm text-gray-100 font-semibold">{user.age}</p>
//                     <p className="text-sm text-gray-100 font-semibold">{user.gender}</p>
//                     <p className="text-sm text-gray-100 font-semibold">
//                       {user.about || 'No bio available'}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     className="btn btn-success btn-sm"
//                     onClick={() => handleReview(req._id, 'accepted')}
//                   >
//                     Accept
//                   </button>
//                   <button
//                     className="btn btn-error btn-sm"
//                     onClick={() => handleReview(req._id, 'rejected')}
//                   >
//                     Reject
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   )}
// </div>



//   );
// };

// export default Requests;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from '../utils/requestSlice';

const AVATAR_FALLBACK =
  "https://raw.githubusercontent.com/vaibhavkachare/dark-avatar/main/dark-profile.png";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.requests);

  // Optional local loading state for better UX visual (not required, can remove)
  const [loading, setLoading] = useState(false);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/user/requests/received`, {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error('Error fetching requests:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleReview = async (requestId, status) => {
    try {
      await axios.post(
        `${BASE_URL}/request/review/${status}/${requestId}`,
        {},
        { withCredentials: true }
      );
      fetchRequests(); // refresh after action
    } catch (error) {
      console.error(`Failed to ${status} request:`, error);
    }
  };

  return (
    <div className="min-h-screen w-full py-10 px-4 bg-gradient-to-br from-gray-950 via-purple-950/90 to-[#120922] flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
        
      </h1>

      {loading ? (
        <div className="flex flex-col items-center gap-3">
          <span className="loading loading-spinner loading-lg text-purple-500" />
          <p className="text-purple-300 text-lg animate-pulse">Loading requests...</p>
        </div>
      ) : requests === null || requests.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-32 bg-white/10 backdrop-blur-md p-12 rounded-3xl shadow-xl max-w-md">
          <svg width="64" height="64" fill="none" className="mb-6 text-purple-300" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17.5 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM6.5 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM21 20.875C21 18.657 16.107 17 12 17s-9 1.657-9 3.875C3 22.142 5.927 23 12 23c6.073 0 9-.858 9-2.125zm1-14.25c0-2.338-7-3.625-10-3.625S2 4.287 2 6.625c0 1.012 1.424 1.985 4.133 2.56a15.033 15.033 0 00.647 2.095C3.606 11.763 2 13.198 2 15c0 2.138 5.286 3.875 10 3.875s10-1.737 10-3.875c0-1.802-1.606-3.237-4.78-4.72.19-.633.444-1.388.647-2.095C21.576 8.61 23 7.637 23 6.625z" />
          </svg>
          <h2 className="text-2xl font-semibold text-purple-100 mb-2">No New Requests!</h2>
          <p className="text-gray-400 text-center max-w-xs">
            You currently have no new connection requests.
            <br />
            Check back later to find developers eager to connect.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-6 w-full max-w-4xl">
          {requests.map((req, idx) => {
            const user = req.fromUserId;
            const hasPhoto = user.photoUrl && user.photoUrl.trim().length > 6;
            const initials =
              (user.firstName?.[0] || "") + (user.lastName?.[0] || "");
            return (
              <div
                key={req._id}
                className="card bg-white/10 backdrop-blur-md shadow-lg border border-white/10 rounded-3xl transition-transform transform hover:scale-[1.03] hover:shadow-2xl flex"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-center gap-6 p-6 w-full">
                  {hasPhoto ? (
                    <img
                      className="w-16 h-16 rounded-full object-cover border-2 border-purple-400 shadow-md flex-shrink-0"
                      src={user.photoUrl}
                      alt="profile"
                      onError={(e) => (e.target.src = AVATAR_FALLBACK)}
                    />
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-full bg-gradient-to-br from-purple-800 to-pink-600 text-white border-2 border-purple-400 shadow-md flex-shrink-0 select-none">
                      {initials}
                    </div>
                  )}

                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold text-white">
                      {user.firstName} {user.lastName}
                    </h2>
                    <div className="flex flex-wrap gap-3 mt-1">
                      {user.age && (
                        <span className="bg-purple-700/70 text-purple-200 px-3 py-1 rounded-full text-xs font-semibold">
                          Age: {user.age}
                        </span>
                      )}
                      {user.gender && (
                        <span className="bg-pink-700/70 text-pink-200 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                          {user.gender}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-purple-100 italic max-w-xl truncate">
                      {user.about || "No bio available"}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 ml-4">
                    <button
                      className="btn btn-success btn-md font-bold tracking-wide shadow-lg transition-transform hover:-translate-y-1 hover:scale-105 focus:ring-4 focus:ring-green-400/50"
                      onClick={() => handleReview(req._id, 'accepted')}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-error btn-md font-bold tracking-wide shadow-lg transition-transform hover:-translate-y-1 hover:scale-105 focus:ring-4 focus:ring-red-400/50"
                      onClick={() => handleReview(req._id, 'rejected')}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Card entries animation */}
      <style>{`
        .card {
          opacity: 0;
          animation: fadeInUp 0.7s forwards;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Requests;
