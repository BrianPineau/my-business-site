import React from 'react'

import './component-css/shop-page.css';
import SmallHeader from './small-header';
import SalesJumboSection from './sales-jumbo-section';
import SalesItemsRow from './sales-items-row';

import XGirl from '../Images/xgirl.jpg';
import AstorLogo from '../Images/AstoriaLogo.png';
import Aras from '../Images/aras.jpg';
import Painting from '../Images/painting.jpg';

const ShopPage = () => {
  return ( 
    <>
      <SmallHeader smallHeaderClass = {'small-header'} />
      <div className='shop-outer-container'>
        <div className='shop-container'>
          <SalesJumboSection imageSrc={XGirl} />
          <SalesItemsRow 
            title='Gandalf Grey'
            price='99.00'
            title2='Box Light'
            price2='140.89'
            title3='Moon Man'
            price3='700.00'
            title4='Nimbus Journey' 
            price4='29.99'                   
          />
          <SalesJumboSection imageSrc={AstorLogo} />
          <SalesItemsRow 
            title='Too Legit'
            price='99.00'
            title2='YERRRRRRR!!'
            price2='140.89'
            title3='Moon Man'
            price3='700.00'
            title4='Nimbus Journey' 
            price4='29.99'   
          />
        </div>
      </div>
    </>
  )
}

export default ShopPage;