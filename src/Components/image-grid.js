import { Link } from 'react-router-dom';

// import ImageCard from './image-card';
import FullImageCard from './full-image-card';
import './component-css/image-grid.css';


const ImageGrid = () => {
  return (
    <div>
      <div className="grid-outer-container">
        <div className="grid-container">
          
          <Link to="/gallery-image-info">
            <FullImageCard />
          </Link>
          
          <FullImageCard />
          <FullImageCard />
          <FullImageCard />
          <FullImageCard />
          <FullImageCard />
          <FullImageCard />

        </div>
      </div>
    </div>
  )
}

export default ImageGrid;