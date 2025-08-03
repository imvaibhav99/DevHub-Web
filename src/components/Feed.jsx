// import React, { useEffect, useState } from 'react';
// import BASE_URL from '../utils/constants';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { addFeed } from '../utils/feedSlice';
// import UserCard from './UserCard'; // Ensure this is the right path
// import { removeUserFromFeed } from '../utils/feedSlice';
// import {useSelector} from "react-redux";

// const Feed = () => {

//   const dispatch = useDispatch();
//  const users = useSelector((state) => state.feed);

//   const getFeed = async () => {
//     try {
//       const res = await axios.get(BASE_URL + "/feed", {
//         withCredentials: true,
//       });
//       //console.log("Feed Response:", res.data);
//       dispatch(addFeed(res.data));
//       // Save users to state for rendering
//     } catch (err) {
//       console.error("Error fetching feed:", err);
//     }
//   };

//   useEffect(() => {
//     getFeed();
//   }, []);

//   return (
//     <div className="flex justify-center my-10">
//       {users.length > 0 ? (
//         <UserCard user={users[0]} />
//       ) : (
//         <h1 className='"bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-100 p-6 rounded-2xl shadow-lg text-xl font-semibold text-center'>No New User Found</h1>
//       )}
//     </div>
//   );
// };

// export default Feed;



import React, { useEffect, useState } from 'react';
import BASE_URL from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.feed);
  const [loading, setLoading] = useState(false);

  const getFeed = async () => {
    setLoading(true);
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error("Error fetching feed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-2 bg-gradient-to-br from-gray-950 via-purple-950/80 to-[#120922]min-h-[65vh] flex flex-col items-center justify-center px-2 bg-gradient-to-br from-gray-950 via-purple-950/80 to-[#120922]">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow">
        My Feed
      </h1>

      {loading ? (
        <div className="flex flex-col items-center gap-2">
          <span className="loading loading-spinner loading-lg text-purple-500"></span>
          <span className="text-purple-200 text-lg animate-pulse">Fetching your dev matches...</span>
        </div>
      ) : users?.length > 0 ? (
        <div className="animate-fade-in-up">
          <UserCard user={users[0]} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg mt-12">
          <svg width="64" height="64" fill="none" className="mb-4 text-purple-300" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17.5 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM6.5 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM21 20.875C21 18.657 16.107 17 12 17s-9 1.657-9 3.875C3 22.142 5.927 23 12 23c6.073 0 9-.858 9-2.125zm1-14.25c0-2.338-7-3.625-10-3.625S2 4.287 2 6.625c0 1.012 1.424 1.985 4.133 2.56a15.033 15.033 0 00.647 2.095C3.606 11.763 2 13.198 2 15c0 2.138 5.286 3.875 10 3.875s10-1.737 10-3.875c0-1.802-1.606-3.237-4.78-4.72.19-.633.444-1.388.647-2.095C21.576 8.61 23 7.637 23 6.625z" />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-200 mb-2">No New Users Found</h2>
          <p className="text-gray-400 text-center max-w-xs">
            Looks like you've reached the end of your feed!
            <br />
            Please check back later for new developer matches.
          </p>
        </div>
      )}
      <style>{`
        .animate-fade-in-up {
          animation: fade-in-up .66s cubic-bezier(.32,1.1,.36,1) both;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(32px);}
          to   { opacity: 1; transform: translateY(0);}
        }
      `}
      </style>
    </div>
  );
};

export default Feed;
