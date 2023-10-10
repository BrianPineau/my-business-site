import React from 'react';

import './component-css/sales-items-row.css';

const salesItemsRow = (props) => {
  return (
    <>
      <div className='item-row-cont'>
        <ul className='item-row-inner-cont'>

          <li className='item-row-list-item'>
            <div className='salesitem-image salesitem-item-1'></div>
            <h2>{props.title}</h2>
            <p>${props.price}</p>
          </li>

          <li className='item-row-list-item'>
            <div className='salesitem-image salesitem-item-2'></div>
            <h2>{props.title2}</h2>
            <p>${props.price2}</p>
          </li>

          <li className='item-row-list-item'>
            <div className='salesitem-image salesitem-item-3'></div>
            <h2>{props.title3}</h2>
            <p>${props.price3}</p>
          </li>

          <li className='item-row-list-item'>
            <div className='salesitem-image salesitem-item-4'></div>
            <h2>{props.title4}</h2>
            <p>${props.price4}</p>
          </li>

        </ul>
      </div>
    </>
  )
}

export default salesItemsRow