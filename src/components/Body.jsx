import React, { use, useEffect } from 'react'
import NavBar from './NavBar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';
import axios from 'axios';
import BASE_URL from '../utils/constants.js'; 
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js'; 
import { useNavigate } from 'react-router-dom'; 
import login from './Login.jsx'; 
import { useSelector } from 'react-redux'; // To access the Redux store state

const Body = () => {
  const dispatch = useDispatch(); //to upload the data to redux store
  const navigate= useNavigate(); 
  const userData = useSelector((store) => store.user); // Accessing the user data from the Redux store
  const fetchUser = async () =>{
    try{
    const user= await axios.get(BASE_URL + "/profile/view",{
      withCredentials:true, //for cors and token cookies
    });
    dispatch(addUser(user.data)); //add the user data to the redux store
    
  } catch (err){
    if (err.response?.status === 401) {
      console.log("Navigation to login page due to unauthorized access");    
  navigate("/login");
}

    console.error("Error fetching user:", err);
   
  }
    }
    
    useEffect(()=>{ 
      if(!userData){
      fetchUser();
    } 
    },[])
    //When the Body component first loads and is displayed on the screen, immediately call the fetchUser function to try and retrieve user data from the backend. 
    // This data fetching operation should only happen once during the component's lifecycle (unless the component is completely removed and then added back to the DOM)."
  
  return (
    <div>
     <NavBar/>
      <Outlet/> {/* This will render the child routes defined in App.jsx such as profile,login etc */}
      <Footer/>
    </div>
  )
}

export default Body
