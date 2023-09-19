import { Link } from 'react-router-dom'; 

import SmallHeader from './small-header';
// import ImageCard from './image-card';
import FullImageCard from './full-image-card';
import './component-css/image-grid.css'; 


const ImageGrid = () => {
  return (
    <div>
      <SmallHeader />
      <div className="grid-outer-container">
        <div className="grid-container">
          
          <FullImageCard 
          navLink={"/gallery-image-info"} 
          fimage = "full-image-container f-img-cont-1"
          imgLink="../Images/AstoriaLogo.png"
          />
          
          <FullImageCard
            fimage = {"full-image-container tall f-img-cont-2"}
          />

          <FullImageCard
            fimage = {"full-image-container fat f-img-cont-3"}
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

        </div>
      </div>
    </div>
  )
}

export default ImageGrid;