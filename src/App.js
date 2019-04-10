import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Homes from './components/Homes';
//import Landing from './components/Landing';
import Available from './components/Available';

class App extends Component {
  render() {
    return (
      <div className="row">
          <nav className="grey darken-2">
            <div className="nav-wrapper">   
              <ul className="hide-on-med-and-down right"> 
              <li><a href="/" className="brand-logo center white-text">Clayton Homes</a></li>             
                <li><Link to='/Homes'>Inventory</Link></li>
                <li><Link to='/Available'>Availabile</Link></li>                              
              </ul>
            </div>
          </nav>
        <main>
          <Route path="/Homes" component={Homes} />
          <Route path="/Available" component={Available} />
        </main>
        <Homes />
      </div> 
    );
  }
}

export default App;
