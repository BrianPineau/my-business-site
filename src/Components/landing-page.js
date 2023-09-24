import React, { useEffect, useState } from 'react';

import Header from './header';
import SmallHeader from './small-header';
import Jumbo from './jumbotron.js';
import ContentRow from './content-row.js';

// import JSONDATA from '../MOCK_DATA.json';

const LandingPage = () => {

  const [isSmallHeader, setSmallHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSmallHeader(true);
      } else {
        setSmallHeader(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <div>
      {/* {isSmallHeader ? <SmallHeader /> : <Header />} */}
      <Header  />
      <SmallHeader 
      smallHeaderClass = {isSmallHeader ? 'small-header' : 'small-header-pretrigger'}
        
      />
      <Jumbo />
      <ContentRow />
      {/* {JSONDATA.map((key, val) => {
        return (
          <div style={{ color: "red" }}>{key.avatar}{key.first_name}</div>
        )
      })} */}
    </div>
  )
}

export default LandingPage;