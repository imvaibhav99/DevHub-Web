import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js'; // Assuming you have a userSlice
import { useNavigate } from 'react-router-dom'; // For navigation after login
import  BASE_URL from '../utils/constants.js';

const Login = () => {

const [emailId, setEmailId]= useState("anil@gmail.com");
const [password, setPassword]= useState("Anil@123");
const dispatch = useDispatch(); // Assuming you have a userSlice to handle user state,this hook will allow you to dispatch actions to update the user state in your Redux store.
const navigate = useNavigate(); // Assuming you have react-router-dom installed, this will allow you to navigate to another page after clicking login

const handleLogin= async ()=>{
  try{
const res = await axios.post(
  BASE_URL + "/login",{
    emailId,                                 
    password,
  },
  {
    withCredentials: true,  //for cors and token cookies 
  }
);
dispatch(addUser(res.data)) //adds the User data on login to the redux store so that it can be accessed in other components
 navigate("/feed");
 console.log(res.data);
 
}catch(err){
    console.error("Login failed:", err);
   
  }
}

  return (
    <div>
      <div
  className="min-h-screen bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1517433456452-f9633a875f6f')`,
  }}
>
  <div className="card w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-90">
    <div className="card-body">
      <h2 className="text-2xl font-bold text-center mb-4">Login to Connect</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" value ={emailId} placeholder="email" className="input input-bordered" 
          onChange={(e)=> setEmailId(e.target.value)}
        />

      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" value={ password} placeholder="password" className="input input-bordered"
          onChange={(e)=> setPassword(e.target.value)}
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Login
