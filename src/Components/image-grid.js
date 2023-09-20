import { Link } from 'react-router-dom'; 

import SmallHeader from './small-header';
// import ImageCard from './image-card';
import FullImageCard from './full-image-card';
import './component-css/image-grid.css'; 


const ImageGrid = () => {

  const backgroundImageUrl = '../Images/image2.jpg';

  return (
    <div>
      <SmallHeader />
      <div className="grid-outer-container">
        <div className="grid-container">
          
          <FullImageCard 
          navLink={"/gallery-image-info"} 
          fimage = "full-image-container fat f-img-cont-1"
          />
          
          <FullImageCard
            fimage = {"full-image-container f-img-cont-2"}
          />

          <FullImageCard
            fimage = {"full-image-container f-img-cont-3"}
          />

          <FullImageCard
            fimage = {"full-image-container f-img-cont-4"}
          />

          <FullImageCard
            fimage = {"full-image-container tall f-img-cont-5"}
          />

          <FullImageCard
            fimage = {"full-image-container f-img-cont-6"}
          />

          <FullImageCard
            fimage = {"full-image-container f-img-cont-7"}
          />

          <FullImageCard
            fimage = {"full-image-container f-img-cont-8"}
          />

          <FullImageCard
            fimage = {"full-image-container f-img-cont-9"}
          />

          <FullImageCard
            fimage = {"full-image-container fat f-img-cont-10"}
          />

          <FullImageCard
            fimage = {"full-image-container f-img-cont-11"}
          />

          <FullImageCard
            fimage = {"full-image-container f-img-cont-12"}
          />

          <FullImageCard
            fimage = {"full-image-container f-img-cont-13"}
          />

        </div>
      </div>
    </div>
  )
}

export default ImageGrid;