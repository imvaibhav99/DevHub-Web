import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../utils/constants.js';
import { Link } from 'react-router-dom';


const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(""); 
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid email or password.");
      } else {
        setError(err?.response?.data || "Login failed. Please try again.");
      }
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517433456452-f9633a875f6f')` }}
    >
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-90">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Login to Connect</h2>

          <div className="form-control">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" value={emailId} placeholder="email" className="input input-bordered"
              onChange={(e) => setEmailId(e.target.value)} />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" value={password} placeholder="password" className="input input-bordered"
              onChange={(e) => setPassword(e.target.value)} />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>

          <div className="form-control mt-4">
            {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
            <p className="text-sm text-center mt-4">
          New to DevHub?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
