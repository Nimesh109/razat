import React from "react";

import "./header.css"

import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";

function Header({ change }) {

 if (change) {
  return (
   <>
    <div className="changed-nav-container">
     <div className="menu-icon">
      <button className="menu-btn">
       <i className="fa-solid fa-bars"></i>
      </button>
     </div>
     <div className="links">
      <a href="/" className="link">
       <i className="fa fa-home"></i>
       Home
      </a>
      <a href="banquet" className="link">
       <i className="fa-solid fa-champagne-glasses"></i> Banquet
      </a>

      <a href="blog" className="link">
       <i className="fa-solid fa-blog"></i>
       Blog</a
      >
      <a href="features" className="link">
       <i className="fa-solid fa-info"></i>
       Features</a
      >
      <a href="about" className="link">
       <i className="fa fa-question-circle"></i>
       About Us
      </a>
      <a href="register" className="link">
       <i className="fa-solid fa-address-card"></i>
       Register
      </a>
      <a href="login" className="link">
       <i className="fa-solid fa-user"></i>
       Login
      </a>
     </div>
    </div>
   </>
  )
 }

 return (
  <>
   <nav>
    <div className="nav-container">
     <div className="menu-container">
      <button className="menu-btn">
       <AiOutlineMenu className="menu-icon" />
      </button>
     </div>

     <div className="links">
      <div className="logo">
       <img src="http://wahabali.com/work/pearl-demo/images/logo2.png" alt="" style={{ width: 200 }} />
      </div>

      <div className="link-container">
       <a href="/" className="link">
        <i className="fa fa-home"></i>
        Home
       </a>
       <a href="banquet" className="link">
        <i className="fa-solid fa-champagne-glasses"></i> Banquet
       </a>

       <a href="blog" className="link">
        <i className="fa-solid fa-blog"></i>
        Blog</a
       >
       <a href="gallery" className="link">
        <i className="fa-solid fa-info"></i>
        Gallery</a
       >
       <a href="about" className="link">
        <i className="fa fa-question-circle"></i>
        About Us
       </a>
       <a href="register" className="link">
        <i className="fa-solid fa-address-card"></i>
        Register
       </a>
       <a href="login" className="link">
        <i className="fa-solid fa-user"></i>
        Login
       </a>
      </div>
     </div>
    </div>
   </nav >
  </>
 )
}

export default Header;