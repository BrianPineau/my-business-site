
import ImageCard from './image-card';
import './component-css/content-row.css';

const ContentRow = () => {

  
  return (
    <div>
      <div className="section-container">
        <div className="flex-container">
          <ImageCard
            image = {"card card-image card-image-1"}
            title = {"Card description 1!"}
            price = {"$5,000!!!"}
          />
          <ImageCard
            image={"card card-image card-image-2"}
            title = {"Card description 2!"}
            price = {"$9,000!!!"}
          />
          <ImageCard
            image={"card card-image card-image-3"}
            title = {"Card description 3!"}
            price = {"$18,000!!!"}
          />

        </div>
      </div>
    </div>
  )
}

export default ContentRow;