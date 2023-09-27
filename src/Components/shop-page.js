import React from 'react'

import './component-css/shop-page.css';
import SmallHeader from './small-header';
import SalesCard from './sales-card';

import XGirl from '../Images/xgirl.jpg';
import AstorLogo from '../Images/AstoriaLogo.png';
import Aras from '../Images/aras.jpg';
import Painting from '../Images/painting.jpg';

const ShopPage = () => {
  return ( 
    <>
      <SmallHeader smallHeaderClass = {'small-header'} />
      
      <div className='outer-container'>
        <div className='container'>
          <SalesCard imageSrc={XGirl} />
          <SalesCard imageSrc={AstorLogo} />
          <SalesCard imageSrc={Painting}/>
          <SalesCard imageSrc={XGirl} />
          <SalesCard imageSrc={AstorLogo} />
          <SalesCard imageSrc={Painting}/>
          <SalesCard imageSrc={XGirl} />
          <SalesCard imageSrc={AstorLogo} />
          <SalesCard imageSrc={Painting}/>
          <SalesCard imageSrc={XGirl} />
          <SalesCard imageSrc={AstorLogo} />
          <SalesCard imageSrc={Painting}/>
        </div>
      </div>
    </>
  )
}

export default ShopPage;