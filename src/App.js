import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Homes from './components/Homes';
import Available from './components/Available';

class App extends Component {
  render() {

    return (
      <div className="row">
          <nav className="grey darken-2">
            <div className="nav-wrapper">   
              <ul className="left hide-on-med-and-down"> 
                <li><a href="/" className="brand-logo center white-text">Clayton Homes</a></li>             
                <li><Link to='/Homes'>Inventory</Link></li>
                <li><Link to='/Available'>Availabile</Link></li>                              
              </ul>
            </div>
          </nav>
        <main>
          <Route exact path="/" render={() => (
            <Redirect to="/Homes"/>
            )}/>
          <Route path="/Homes" component={Homes} />
          <Route path="/Available" component={Available} />
        </main>
      </div> 
    );
  }
}

export default App;
