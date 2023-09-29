import React from 'react'

import './component-css/shop-page.css';
import SmallHeader from './small-header';
import SalesJumboSection from './sales-jumbo-section';

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
          {/* <SalesCard imageSrc={AstorLogo} />
          <SalesCard imageSrc={Painting}/>
          <SalesCard imageSrc={XGirl} />
          <SalesCard imageSrc={AstorLogo} />
          <SalesCard imageSrc={Painting}/>
          <SalesCard imageSrc={XGirl} />
          <SalesCard imageSrc={AstorLogo} />
          <SalesCard imageSrc={Painting}/>
          <SalesCard imageSrc={XGirl} />
          <SalesCard imageSrc={AstorLogo} />
          <SalesCard imageSrc={Painting}/> */}
        </div>
      </div>
    </>
  )
}

export default ShopPage;