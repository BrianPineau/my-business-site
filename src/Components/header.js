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
      <header className="vert-header">
        <div className="header-container vheader-container">

          <div className="top-row vtop-row">
            
            <div className="logo vlogo"><div className="logo-image"></div></div>
            {/* <div className="tools">tools</div> */}
          </div>

          <div className="bottom-row vert-bottom-row">

            {/* <div className={scrolled === false ? "social-media-pretrigger": "social-media-triggered"}>media</div>  */}

            <Link style={noMoStylin} to="./"><div className="home vhome">HOME</div></Link>
            <Link><div className="shop vshop">SHOP</div></Link>
            <Link style={noMoStylin} to="./gallery"><div className="gallery vgallery">GALLERY</div></Link>
            <Link><div className="about vabout">ABOUT</div></Link>
            <Link><div className="contact vcontact">CONTACT</div></Link>
            <Link><div className="sales vsales">SALES</div></Link>

            {/* <div className={scrolled === false ? "tools-pretrigger": "tools-triggered"}>tools</div> */}

          </div>

          <div className="social-media">media</div>
        </div>
      </header>
    </div>


    
    
    // <div>
    //   <header className={scrolled === false ? "full-header": "full-header-shrink"}>
    //     <div className="header-container">

    //       <div className="top-row">
    //         <div className="social-media">media</div>
    //         <div className="logo"><div className="logo-image"></div></div>
    //         <div className="tools">tools</div>
    //       </div>

    //       <div className="bottom-row">

    //         <div className={scrolled === false ? "social-media-pretrigger": "social-media-triggered"}>media</div> 

    //         <Link style={noMoStylin} to="./"><div className="home">HOME</div></Link>
    //         <div className="shop">SHOP</div>
    //         <Link style={noMoStylin} to="./gallery"><div className="gallery">GALLERY</div></Link>
    //         <div className="about">ABOUT</div>
    //         <div className="contact">CONTACT</div>
    //         <div className="sales">SALES</div>

    //         <div className={scrolled === false ? "tools-pretrigger": "tools-triggered"}>tools</div>

    //       </div>

    //     </div>
    //   </header>
    // </div>
  )
}

export default Header;