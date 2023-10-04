import { Link } from 'react-router-dom'; 

import SmallHeader from './small-header';
// import ImageCard from './image-card';
import FullImageCard from './full-image-card';
import './component-css/image-grid.css'; 


const ImageGrid = () => {

  const backgroundImageUrl = '../Images/image2.jpg';

  return (
    <div>
      <SmallHeader 
        smallHeaderClass = {'small-header'}
      />
      <div className="grid-outer-container">
        <div className="grid-container">
          
          <FullImageCard 
          navLink={"/gallery-image-info"} 
          fimage = "full-image-container fat"
          fImageSource = "full-image-image full-image-image-1"
          />
          
          <FullImageCard
            fimage = {"full-image-container"}
            fImageSource = "full-image-image full-image-image-2"
          />

          <FullImageCard
            fimage = {"full-image-container"}
            fImageSource = "full-image-image full-image-image-3"
          />

          <FullImageCard
            fimage = {"full-image-container"}
            fImageSource = "full-image-image full-image-image-4"
          />

          <FullImageCard
            fimage = {"full-image-container tall"}
            fImageSource = "full-image-image full-image-image-5"
          />

          <FullImageCard
            fimage = {"full-image-container"}
            fImageSource = "full-image-image full-image-image-6"
          />

          <FullImageCard
            fimage = {"full-image-container"}
            fImageSource = "full-image-image full-image-image-7"
          />

          <FullImageCard
            fimage = {"full-image-container"}
            fImageSource = "full-image-image full-image-image-8"
          />

          <FullImageCard
            fimage = {"full-image-container"}
            fImageSource = "full-image-image full-image-image-9"
          />

          <FullImageCard
            fimage = {"full-image-container fat"}
            fImageSource = "full-image-image full-image-image-10"
          />

          <FullImageCard
            fimage = {"full-image-container"}
            fImageSource = "full-image-image full-image-image-11"
          />

          <FullImageCard
            fimage = {"full-image-container"}
            fImageSource = "full-image-image full-image-image-12"
          />

          <FullImageCard
            fimage = {"full-image-container"}
            fImageSource = "full-image-image full-image-image-13"
          />

        </div>
      </div>
    </div>
  )
}

export default ImageGrid;