import React from 'react';

import './component-css/sales-jumbo-section.css';

const SalesJumboSection = (props) => {
  return (
    <>
     <div className='sales-jumbo-section'>
      <div className='sales-jumbo-info-cont'>
        <div className='sales-section-header'>POSTERS</div>
        <button className='sales-jumbo-button'>VIEW ALL</button>
      </div>
      <div className='sales-img-cont'>
        <div className='sales-jumbo-image sales-jumbo-image-1'></div>
      </div>
     </div>
    </>
  )
}

export default SalesJumboSection
