import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../utils/constants';
import { removeUser } from '../utils/userSlice';
import { addFeed } from '../utils/feedSlice'; 


const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    const res = await axios.post(BASE_URL + "/logout",{}, { withCredentials: true });
    console.log("Logout successful", res.data);
    dispatch(removeUser());    //remove user data from the Redux store
    navigate("/login");  
  } catch (err) {
    console.error("Logout failed:", err);
  }
};


  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl">DevHub</Link>
      </div>

      <div className="flex gap-2 items-center">
        {user ? (
          <>
          <p className="text-sm font-medium px-2">Welcome {user.firstName}</p>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User"
                    src={user.photoUrl || `https://ui-avatars.com/api/?name=${user.firstName || 'User'}`}
                  />
                   
                </div>
              </div>
             
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li><Link to="/connections">Connections</Link></li>
                <li><Link to="/requests">Requests</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
            
          </>
        ) : (
          <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
