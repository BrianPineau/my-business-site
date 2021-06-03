import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Components/header';
import ImageGrid from './Components/image-grid';
import LandingPage from './Components/landing-page';

function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/gallery" component={ImageGrid} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
