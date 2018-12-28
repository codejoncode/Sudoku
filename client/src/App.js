import React, { Component } from 'react';

import './App.css';
import Home from './Components/Home';
import Test from './Components/Test';
import AppTitle from './Components/AppTitle';

class App extends Component {
  state = {

  }

  
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <AppTitle />
        </header>
        <div className = "small-container">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
