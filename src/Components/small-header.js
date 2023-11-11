import { Link } from 'react-router-dom';

import './component-css/small-header.css';
import xLogo from '../Images/x-logo.png';
 
const SmallHeader = (props) => {


  const noMoStylin = {
    color: "white",
    textDecoration: "none"
  }

  return (
    <div>
      <header className={props.smallHeaderClass/*"small-header"*/}>

          {/* <div className="top-row">
            <div className="social-media">media</div>
            <div className="logo">Groooaaaow!</div>
            <div className="tools">tools</div>
          </div> */}

          <div className="small-wrapper">

            <Link to="twitter.com/10poundhound" target="_blank" className="small-media">
              <div className='small-media-container'>
                <img src={xLogo}/>
              </div>
            </Link> 

            <Link style={noMoStylin} to="./">
              <div className="home">HOME</div>
            </Link>

            <Link style={noMoStylin} to="./shop-page">
              <div className="shop">SHOP</div>
            </Link>

            <Link style={noMoStylin} to="./gallery">
              <div className="gallery">GALLERY</div>
            </Link>
            
            <Link style={noMoStylin} to="./about">
              <div className="about">ABOUT</div>
            </Link>

            <Link style={noMoStylin} to="./contact">
              <div className="contact">CONTACT</div>
            </Link>

            <div className="sales">SALES</div>

            <div className="tools-triggered">tools</div>

          </div>

      </header>
    </div>
  )
}

export default SmallHeader;