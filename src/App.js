import React from 'react';
import './App.css';

import Header from './Components/header';
import Jumbo from './Components/jumbotron';
import ContentRow from './Components/content-row';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbo />
      <ContentRow />
    </div>
  );
}

export default App;
