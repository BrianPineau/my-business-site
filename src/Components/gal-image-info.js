

import SmallHeader from './small-header';
import FullImageCard from './full-image-card';
import './component-css/gal-image-info.css';


const GalleryImageInfo = () => {

 
  return (
    <div>
      <SmallHeader />
      <div className="image-info-container">

        <div className="image-container">
          <div href="" className="big-image"></div>
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