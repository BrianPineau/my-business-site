import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ImageGrid from './Components/image-grid';
import LandingPage from './Components/landing-page';
import ShopPage from './Components/shop-page'
import GalleryImageInfo from './Components/gal-image-info.js';
import Footer from './Components/footer';
import About from './Components/about.js';
import Contact from './Components/contact.js';

const blackBackground = {
  backgroundColor: 'black'
};

function App() {
  return (
    
    

    <Router>
      <div className="App" style={blackBackground}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/shop-page" component={ShopPage} />
          <Route path="/gallery" component={ImageGrid} />
          <Route path="/gallery-image-info" component={GalleryImageInfo} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
