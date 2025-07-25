import React from 'react'
import NavBar from './NavBar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

const Body = () => {
  return (
    <div>
     <NavBar/>
      <Outlet/> {/* This will render the child routes defined in App.jsx such as profile,login etc */}
      <Footer/>
    </div>
  )
}

export default Body
