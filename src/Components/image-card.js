import React, { useState } from 'react';

import './component-css/image-card.css';

const ImageCard = (props) => {

  let [className, animateCard] = useState(false);
  
  console.log(animateCard);

  return ( 
    <div>
      <section className="card card-1">
        <div
          onMouseEnter = {() => animateCard(true)}
          onMouseLeave = {() => animateCard(false)}
          className={props.image}>
          <div className={className === false ? "hover-card-1" : "hover-card-1-show" }>Closer Look</div>
        </div>

        <div className="card-info">
          <h1 className="card-title">{props.title}</h1>
          <p className="card-text">{props.price}</p>
        </div>
      </section>
    </div>
  )
}

export default ImageCard;