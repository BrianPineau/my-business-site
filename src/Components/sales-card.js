import React from 'react';

import './component-css/sales-card.css';

const SalesCard = (props) => {
  return (
    <>
      <div className='sales-card-wrap'>
        <div className = "card">
        <div className = "image">
          <img  src = {props.imageSrc} />
        </div>
        <div className = "content">
          <h3>This is content</h3>
          <p>DIn publishing and graphic design,           
            Lorem ipsum is a placeholder text               
            commonly used to demonstrate the visual         
            form of a document or a typeface without         
            relying on meaningful content.
          </p>
        </div>
        </div>   
      </div>
    </>
  )
}

export default SalesCard