import React from 'react'
import Image from 'next/image';
import "./navbar.css";
const Navbar = ({showsidebar,setshowsidebar}) => {
  const togglesidebar = ()=>{
    setshowsidebar(true);
  }
  return (
    <nav>
      <button className='menu-icon' onClick={togglesidebar}><svg width="30px" height="30px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#212121" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" stroke="#CCCCCC"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff"></path> </g></svg></button>
      <img src="./images/logo1.png" alt="logo" width={60} height={60}
      />

      <div className="nav-btn-container">
      <div className="icons">
        <button className='back-btn'>{"<"}</button>
        <button className='forward-btn'>{">"}</button>
      </div>

      <div className='btn-container'>
        <button className="sign-btn btn">Sign-in</button>
        <button className="login-btn btn">Login</button>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
