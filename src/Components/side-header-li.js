import React, { useState } from 'react';
import {Fragment} from 'react';

import './component-css/side-header-li.css';

const SideHeaderLi = (props) => {


  const [pageLoad , setPageLoad] = useState(false);

  window.addEventListener('load', () => {
    setPageLoad(true);
    // alert('AWWWW SHEEIIIIIII!!');
  })


  return (
    <Fragment>
      <div className={props.className} /*className={pageLoad ? ('.vstore-loaded') : ('.vstore')}*/>{props.liName}</div>
    </Fragment>
    
  )
}

export default SideHeaderLi;