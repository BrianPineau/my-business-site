import React, { useState } from 'react';

import SmallHeader from './small-header';
import FullImageCard from './full-image-card';
import './component-css/gal-image-info.css';


const GalleryImageInfo = () => {

  let [chooseClass, popOutWindow] = useState(false);

  // const toggleWindow = () => {
  //   chooseClass ? popOutWindow(true) : popOutWindow(false);
  //   console.log(chooseClass);
  // }
  const closeWindow = () => {
    chooseClass ? popOutWindow(false) : popOutWindow(true);
  }
 
  return (
    <div>
      <SmallHeader />
      <div className="image-info-container">

        <div className="image-container">
          <div onClick={() => popOutWindow()} className="big-image"></div>
        </div>

        <div onClick={() => closeWindow()} className={chooseClass === false ? "full-screen-img-off" : "full-screen-img-on"}>
          <div  className="full-screen-image"></div>
        </div>

        <div className="side-bar-container">  
          <div className="similar-images">
            <div className="similar-images-grid"> 
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
              <FullImageCard />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GalleryImageInfo;