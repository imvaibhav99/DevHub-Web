import React from 'react'

const Logout = () => {

 const handleLogout = async () => {
  try {
    await axios.get(BASE_URL + "/logout", { withCredentials: true });
    dispatch(removeUser()); // Clear Redux state
    navigate("/login"); // Go to login screen
  } catch (err) {
    console.error("Logout failed", err);
  }
};

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleLogout}
        className="btn btn-primary"
      >
        Logout
      </button>
    </div>
  )
}

export default Logout
