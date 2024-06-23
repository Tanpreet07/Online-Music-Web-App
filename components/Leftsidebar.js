"use client"
import React from 'react'
import "./leftsidebar.css";
const Leftsidebar = ({showsidebar}) => {

  
  return (
    <div className={showsidebar?"container1":"container"}>
      <div className="inner-container">
        <div className="user-box">
          <img className='avtar-pic' src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1718582400&semt=ais_user" />
          <h3 className="username">Farzan Faruk</h3>
          <p className="gmail">farzanfaruk@gmail.com</p>
        </div>
        <div className="side-nav">
          <p><b>Home</b></p>
          <p><b>Browse</b></p>
          <p><b>Album</b></p>
          <p><b>Videos</b></p>
        </div>
      </div>
    </div>
  )
}

export default Leftsidebar
