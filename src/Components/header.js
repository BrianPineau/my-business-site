import React, { useState } from 'react';
import { Link } from 'react-router-dom';



import './component-css/header.css';


const Header = () => {



  let [scrolled, shrinkHeader] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 6) {
      shrinkHeader(true);
    } else {
      shrinkHeader(false);
    }
  }

  window.addEventListener('scroll', changeHeader);

  const noMoStylin = {
    color: "white",
    textDecoration: "none"
  }

  return (
    <div>
      <div className="gap-filler"></div>
      
      <header className={scrolled === false ? "full-header": "shrink-header full-header-shrink"}>
        <div className="header-container">

          <div className="top-row">
            <div className="social-media">media</div>
            <div className="logo">Groooaaaow!</div>
            <div className="tools">tools</div>
          </div>

          <div className="bottom-row">
            <Link style={noMoStylin} to="./"><div className="home">HOME</div></Link>
            <div className="shop">SHOP</div>
            <Link style={noMoStylin} to="./gallery"><div className="gallery">GALLERY</div></Link>
            <div className="about">ABOUT</div>
            <div className="contact">CONTACT</div>
            <div className="sales">SALES</div>
          </div>

        </div>
      </header>

      <div className={scrolled === false ? "shrink-header": "shrink-header-show"}>
        <div className="shrink-header-container">

          <div className="shrink-logo">Groooaaaow!</div>
        
          <div className="menu-container">
            <Link style={noMoStylin} to="./"><div className="home">HOME</div></Link>
            <div className="shop">SHOP</div>
            <Link style={noMoStylin} to="./gallery"><div className="gallery">GALLERY</div></Link>
            <div className="about">ABOUT</div>
            <div className="contact">CONTACT</div>
            <div className="sales">SALES</div>
          </div>
        
          <div className="shrink-tools">tools</div>

        </div>
      </div>
    </div>
  )
}

export default Header;