import React, { useState } from 'react';

import './component-css/content-row.css';

const ContentRow = () => {

  let [className, animateCard] = useState(false);
  
  console.log(animateCard);
  return (
    <div>
      <div className="section-container">
        <div className="flex-container">
          <section className="card card-1">
            <div
              onMouseEnter = {() => animateCard(true)}
              onMouseLeave = {() => animateCard(false)}
              className="card-image">
              <div className={className === false ? "hover-card-1" : "hover-card-1-show" }>POW!</div>
            </div>

            <div className="card-info">
              <h1 className="card-title">BUY ME PLEASE</h1>
              <p className="card-text">Ratatat tat cat in a hat</p>
            </div>
          </section>


          <section className="card card-2"></section>
          <section className="card card-3"></section>
        </div>
      </div>
    </div>
  )
}

export default ContentRow;