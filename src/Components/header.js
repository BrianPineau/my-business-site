import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

import SideHeaderLi from './side-header-li.js';
import './component-css/header.css';


const Header = () => {

  const [effectTriggered, setEffectTriggered] = useState(false);

  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);  
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };



/*  Handle the LOAD event listener  */
  useEffect (() => {
    const handleLoadPage = () => {
      setEffectTriggered(true);
    };


    window.addEventListener('load', handleLoadPage);

    return () => {
      window.removeEventListener('load', handleLoadPage)
    }
  }, []);



 

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setEffectTriggered(false);
      } else {
        setEffectTriggered(true);
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

    <div className={effectTriggered ? ("shrunk-bg-header") : ("bg-header")}></div>
      <header className={effectTriggered ? ("shrunk-vert-header") : ("vert-header")}>
        <div className="header-container vheader-container">

          <div className="top-row vtop-row">
            
            <div className="logo vlogo"><div className="logo-image"></div></div>
            {/* <div className="tools">tools</div> */} 
          </div>

          <div className="bottom-row vert-bottom-row">

            {/* <div className={scrolled === false ? "social-media-pretrigger": "social-media-triggered"}>media</div>  */}

            {/* <Link style={noMoStylin} to="./"><div className="home vhome">HOME</div></Link> */}

            <Link to="./" style={noMoStylin}>
              <div className='header-element-cont'>
                <SideHeaderLi liName={'HOME'} className={effectTriggered ? "vhome-loaded" : "vhome"} />
                <div className='extendo-underline'></div>
              </div>
            </Link>


            <Link to="./shop-page" style={noMoStylin}>
              <div className='header-element-cont'>
                <SideHeaderLi liName={'STORE'} className={effectTriggered ? "vstore-loaded" : "vstore"} />
                <div className='extendo-underline'></div>
              </div>
            </Link>

            <Link to="./gallery" style={noMoStylin}>
              <div className='header-element-cont'>
                <SideHeaderLi liName={'GALLERY'} className={effectTriggered ? "vgallery-loaded" : "vgallery"} />
                <div className='extendo-underline'></div>
              </div>
            </Link>

            <Link style={noMoStylin}>
              <div className='header-element-cont'>
                <SideHeaderLi liName={'ABOUT'} className={effectTriggered ? "vabout-loaded" : "vabout"} />
                <div className='extendo-underline'></div>
              </div>
            </Link>

            <Link style={noMoStylin}>
              <div className='header-element-cont'>
                <SideHeaderLi liName={'CONTACT'} className={effectTriggered ? "vcontact-loaded" : "vcontact"} />
                <div className='extendo-underline'></div>
              </div>
            </Link>

            <Link style={noMoStylin}>
              <div className='header-element-cont'>
                <SideHeaderLi liName={'SALES'} className={effectTriggered ? "vsales-loaded" : "vsales"} />
                <div className='extendo-underline'></div>
              </div>
            </Link>

             

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