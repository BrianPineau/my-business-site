import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

import SideHeaderLi from './side-header-li.js';
import './component-css/header.css';


const Header = () => {

  const [loadStatus, setLoadStatus] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);  
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


window.addEventListener('load', () => {
  setLoadStatus(true);
  // setHeadWidth(300);
});



  let [scrolled, shrinkHeader] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 6) {
      shrinkHeader(true);
    } else {
      shrinkHeader(false);
    }
  };

  window.addEventListener('scroll', changeHeader);


  const noMoStylin = {
    color: "white",
    textDecoration: "none"
  };

  return (   
    <Fragment>

    <div className={loadStatus ? ("shrunk-bg-header") : ("bg-header")}>Bloop</div>
      <header className={loadStatus ? ("shrunk-vert-header") : ("vert-header")}>
        <div className="header-container vheader-container">

          <div className="top-row vtop-row">
            
            <div className="logo vlogo"><div className="logo-image"></div></div>
            {/* <div className="tools">tools</div> */}
          </div>

          <div className="bottom-row vert-bottom-row">

            {/* <div className={scrolled === false ? "social-media-pretrigger": "social-media-triggered"}>media</div>  */}

            {/* <Link style={noMoStylin} to="./"><div className="home vhome">HOME</div></Link> */}

            <Link style={noMoStylin} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <SideHeaderLi liName={'HOME'} className={loadStatus ? "vhome-loaded" : "vhome"} />
            </Link>

              <div className={isHovered ? "flat-line" : "flat-line-hovered"}></div>
            <Link style={noMoStylin}>
              <SideHeaderLi liName={'STORE'} className={loadStatus ? "vstore-loaded" : "vstore"} />
            </Link>

            <Link style={noMoStylin}>
              <SideHeaderLi liName={'GALLERY'} className={loadStatus ? "vgallery-loaded" : "vgallery"} />
            </Link>

            <Link style={noMoStylin}>
              <SideHeaderLi liName={'ABOUT'} className={loadStatus ? "vabout-loaded" : "vabout"} />
            </Link>

            <Link style={noMoStylin}>
              <SideHeaderLi liName={'CONTACT'} className={loadStatus ? "vcontact-loaded" : "vcontact"} />
            </Link>
            <Link style={noMoStylin}><SideHeaderLi liName={'SALES'} className={loadStatus ? "vsales-loaded" : "vsales"} /></Link>
            
             {/* <Link style={noMoStylin}><div className="shop vshop">STORE</div></Link> 
             <Link style={noMoStylin} to="./gallery"><div className="gallery vgallery">GALLERY</div></Link>
            <Link style={noMoStylin}><div className="about vabout">ABOUT</div></Link>
            <Link style={noMoStylin}><div className="contact vcontact">CONTACT</div></Link> 
             <Link style={noMoStylin}><div className="sales vsales">SALES</div></Link>  */}

             <div className={scrolled === false ? "tools-pretrigger": "tools-triggered"}>tools</div> 

          </div>

          <div className="social-media">media</div>
        </div>
      </header>
    </Fragment>


    
    
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