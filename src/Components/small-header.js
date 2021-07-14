import { Link } from 'react-router-dom';

import './component-css/small-header.css';

const SmallHeader = () => {


  const noMoStylin = {
    color: "white",
    textDecoration: "none"
  }

  return (
    <div>
      <header className="small-header">

          {/* <div className="top-row">
            <div className="social-media">media</div>
            <div className="logo">Groooaaaow!</div>
            <div className="tools">tools</div>
          </div> */}

          <div className="small-wrapper">

            <div className="small-media">media</div> 

            <Link style={noMoStylin} to="./"><div className="home">HOME</div></Link>
            <div className="shop">SHOP</div>
            <Link style={noMoStylin} to="./gallery"><div className="gallery">GALLERY</div></Link>
            <div className="about">ABOUT</div>
            <div className="contact">CONTACT</div>
            <div className="sales">SALES</div>

            <div className="tools-triggered">tools</div>

          </div>

      </header>
    </div>
  )
}

export default SmallHeader;