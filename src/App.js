import React, { Component } from 'react';
import './App.css';
import Homes from './components/Homes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Clayton Homes React App</h1>
        </header>
        <Homes />
      </div>
    );
  }
}

export default App;
