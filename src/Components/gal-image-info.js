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
      <SmallHeader smallHeaderClass = {'small-header'} />
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
              <FullImageCard fimage="full-image-image-1 full-image-image"/>
              <FullImageCard fimage="full-image-image-2 full-image-image" />
              <FullImageCard fimage="full-image-image-3 full-image-image" />
              <FullImageCard fimage="full-image-image-4 full-image-image" />
              <FullImageCard fimage="full-image-image-5 full-image-image" />
              <FullImageCard fimage="full-image-image-6 full-image-image" />
              <FullImageCard fimage="full-image-image-7 full-image-image" />
              <FullImageCard fimage="full-image-image-8 full-image-image" />
              <FullImageCard fimage="full-image-image-9 full-image-image" />
              <FullImageCard fimage="full-image-image-10 full-image-image" />
              <FullImageCard fimage="full-image-image-11 full-image-image" />
              <FullImageCard fimage="full-image-image-12 full-image-image" />
              <FullImageCard fimage="full-image-image-13 full-image-image" />
              <FullImageCard fimage="full-image-image-11 full-image-image" />
              <FullImageCard fimage="full-image-image-3 full-image-image" />
              <FullImageCard fimage="full-image-image-7 full-image-image" />
              <FullImageCard fimage="full-image-image-12 full-image-image" />
              <FullImageCard fimage="full-image-image-13 full-image-image" />
              <FullImageCard fimage="full-image-image-11 full-image-image" />
              <FullImageCard fimage="full-image-image-3 full-image-image" />
              <FullImageCard fimage="full-image-image-7 full-image-image" />
              <FullImageCard fimage="full-image-image-11 full-image-image" />
              <FullImageCard fimage="full-image-image-3 full-image-image" />
              <FullImageCard fimage="full-image-image-7 full-image-image" />
              <FullImageCard fimage="full-image-image-12 full-image-image" />
              <FullImageCard fimage="full-image-image-13 full-image-image" />
              <FullImageCard fimage="full-image-image-11 full-image-image" />
              <FullImageCard fimage="full-image-image-3 full-image-image" />
              <FullImageCard fimage="full-image-image-7 full-image-image" />
              <FullImageCard fimage="full-image-image-7 full-image-image" />
              <FullImageCard fimage="full-image-image-12 full-image-image" />
              <FullImageCard fimage="full-image-image-13 full-image-image" />
              <FullImageCard fimage="full-image-image-11 full-image-image" />
              <FullImageCard fimage="full-image-image-3 full-image-image" />
              <FullImageCard fimage="full-image-image-7 full-image-image" />
              <FullImageCard fimage="full-image-image-11 full-image-image" />
              <FullImageCard fimage="full-image-image-3 full-image-image" />
              <FullImageCard fimage="full-image-image-7 full-image-image" />
              <FullImageCard fimage="full-image-image-12 full-image-image" />
              <FullImageCard fimage="full-image-image-13 full-image-image" />
              <FullImageCard fimage="full-image-image-11 full-image-image" />
              <FullImageCard fimage="full-image-image-3 full-image-image" />
              <FullImageCard fimage="full-image-image-7 full-image-image" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GalleryImageInfo;