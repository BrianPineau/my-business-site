import React, { useEffect , useState } from 'react';
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

  



  useEffect (() => {
    const handleLoadPage = () => {
      setLoadStatus(true);
    };


    window.addEventListener('load', handleLoadPage);

    return () => {
      window.removeEventListener('load', handleLoadPage)
    }
  }, []);



  let [scrolled, shrinkHeader] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 6) {
      shrinkHeader(true);
    } else {
      shrinkHeader(false);
    }
  };

  window.addEventListener('scroll', changeHeader);

  const [scrollClass, setScrollClass] = useState('top'); // Initial class

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position (Y-axis)
      if (window.scrollY > 0) {
        // When scrolled past Y = 0
        setScrollClass('scrolled');
      } else {
        // When at the top of the page (Y = 0)
        setScrollClass('top');
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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

              <div className={isHovered ? "flat-line flat-line-1" : "flat-line-hovered"}></div>

            <Link to="./shop-page" style={noMoStylin}>
              <SideHeaderLi liName={'STORE'} className={loadStatus ? "vstore-loaded" : "vstore"} />
            </Link>

            <div className={isHovered ? "flat-line flat-line-2" : "flat-line-hovered"}></div>

            <Link to="./gallery" style={noMoStylin}>
              <SideHeaderLi liName={'GALLERY'} className={loadStatus ? "vgallery-loaded" : "vgallery"} />
            </Link>

            <Link style={noMoStylin}>
              <SideHeaderLi liName={'ABOUT'} className={loadStatus ? "vabout-loaded" : "vabout"} />
            </Link>

            <Link style={noMoStylin}>
              <SideHeaderLi liName={'CONTACT'} className={loadStatus ? "vcontact-loaded" : "vcontact"} />
            </Link>
            <Link style={noMoStylin}><SideHeaderLi liName={'SALES'} className={loadStatus ? "vsales-loaded" : "vsales"} /></Link>

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