
  const DEFAULT_AVATAR =
  "https://raw.githubusercontent.com/vaibhavkachare/dark-avatar/main/dark-profile.png";
;

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
    <div className="w-80 rounded-xl shadow-lg bg-gray-900 cursor-pointer select-none transform transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Photo section */}
      <div className="w-full h-96 overflow-hidden rounded-t-xl bg-gray-900">
        <img
          src={photoUrl || DEFAULT_AVATAR}
          alt={`${fullName || "User"}'s profile`}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = DEFAULT_AVATAR)}
        />
      </div>
      <div className="p-4 text-white">
        <h2 className="text-2xl font-bold">
          {fullName}
          {age && <span className="ml-2 font-normal text-gray-300">{`, ${age}`}</span>}
        </h2>
        {gender && (
          <p className="uppercase tracking-wide text-sm text-gray-400 mt-1">
            {gender}
          </p>
        )}
        <p className="mt-3 text-gray-300 text-sm leading-relaxed h-16 overflow-hidden">
          {about}
        </p>

        {/* Action buttons */}
        <div className="flex justify-center space-x-8 mt-6">
          <button
            onClick={onPass}
            aria-label="Pass"
            className="w-16 h-16 rounded-full border-2 border-red-400 text-red-400 text-4xl flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:scale-110"
          >
            ×
          </button>
          <button
            onClick={onLike}
            aria-label="Like"
            className="w-16 h-16 rounded-full border-2 border-green-400 text-green-400 text-3xl flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:scale-110"
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
