import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice'; // ensure correct path

const SignUp = () => {
  const [formData, setFormData] = useState({

    firstName: '',
    lastName: '',
    username: '',
    emailId: '',
    password: '',

  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSignUp = async () => {
    setError('');
    try {
      const res = await axios.post(`${BASE_URL}/signup`, formData, {
        withCredentials: true,
      });
      const userData = res.data;
      dispatch(addUser(userData.data));
      navigate('/feed');
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.response?.data || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517433456452-f9633a875f6f')` }}
    >
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-90">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

          {['firstName', 'lastName','username', 'emailId', 'password'].map((field) => (
            <div className="form-control" key={field}>
              <label className="label">
                <span className="label-text capitalize">{field === 'emailId' ? 'Email' : field}</span>
              </label>
              <input
                type={field === 'password' ? 'password' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field}
                className="input input-bordered"
              />
            </div>
          ))}

          <div className="form-control mt-4">
            {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}
            <button className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
