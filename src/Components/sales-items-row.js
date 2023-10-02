import React from 'react';

import './component-css/sales-items-row.css';

const salesItemsRow = () => {
  return (
    <>
      <div className='item-row-cont'>
        <ul className='item-row-inner-cont'>

          <li className='item-row-list-item'>
            <div className='salesitem-image salesitem-item-1'></div>
            <h2>Title Section</h2>
            <p>$Price</p>
          </li>

          <li className='item-row-list-item'>
            <div className='salesitem-image salesitem-item-2'></div>
            <h2>Title Section</h2>
            <p>$Price</p>
          </li>

          <li className='item-row-list-item'>
            <div className='salesitem-image salesitem-item-3'></div>
            <h2>Title Section</h2>
            <p>$Price</p>
          </li>

          <li className='item-row-list-item'>
            <div className='salesitem-image salesitem-item-4'></div>
            <h2>Title Section</h2>
            <p>$Price</p>
          </li>

        </ul>
      </div>
    </>
  )
}

export default salesItemsRow