
// import React from 'react';

// const UserCard = ({ user }) => {
//   if (!user) return null;

//   const {
//     firstName = '',
//     lastName = '',
//     age,
//     gender,
//     about = 'No bio provided',
//     photoUrl,
//   } = user;

//   const fullName = `${firstName} ${lastName}`;

//   return (
//     <div className="card bg-base-100 w-96 shadow-lg">
//       <figure>
//         <img
//           src={photoUrl}
//           alt={`${fullName}'s profile`}
//           className="w-full h-80 object-cover"
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{fullName}{age ? `, ${age}` : ''}</h2>
//         <p>{about}</p>
//         {gender && <p className="text-gray-600 capitalize">Gender: {gender}</p>}
//         <div className="card-actions justify-end">
//              <button className="btn btn-ghost color-red">Ignore</button>
//           <button className="btn btn-success">Interested</button>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;





import React from "react";

const DEFAULT_AVATAR =
  "https://media.istockphoto.com/id/1726213993/vector/default-avatar-profile-placeholder-abstract-vector-silhouette-element.jpg?s=612x612&w=0&k=20&c=nYlk0j076CBZ5xGCCaVXtISYGK2SzXRwuQBXPkfmMX4=";

const UserCard = ({ user, onLike, onPass }) => {
  if (!user) return null;

  const {
    firstName = "",
    lastName = "",
    age,
    gender,
    about = "No bio provided",
    photoUrl,
  } = user;

  const fullName = `${firstName} ${lastName}`.trim();

  return (
    <div className="w-80 rounded-xl shadow-lg bg-white cursor-pointer select-none transform transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Photo section */}
      <div className="w-full h-96 overflow-hidden rounded-t-xl">
        <img
          src={photoUrl || DEFAULT_AVATAR}
          alt={`${fullName || "User"}'s profile`}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = DEFAULT_AVATAR)}
        />
      </div>

      {/* User info section */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-900">
          {fullName}
          {age && <span className="ml-2 font-normal text-gray-600">{`, ${age}`}</span>}
        </h2>
        {gender && (
          <p className="uppercase tracking-wide text-sm text-gray-700 mt-1">
            {gender}
          </p>
        )}
        <p className="mt-3 text-gray-700 text-sm leading-relaxed h-16 overflow-hidden">
          {about}
        </p>

        {/* Action buttons */}
        <div className="flex justify-center space-x-8 mt-6">
          <button
            onClick={onPass}
            aria-label="Pass"
            className="w-16 h-16 rounded-full border-2 border-red-500 text-red-500 text-4xl flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:scale-110"
          >
            ×
          </button>
          <button
            onClick={onLike}
            aria-label="Like"
            className="w-16 h-16 rounded-full border-2 border-green-500 text-green-500 text-3xl flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:scale-110"
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
