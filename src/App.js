import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Homes from './components/Homes';
import Landing from './components/Landing';
import Available from './components/Available';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav>
            <div className="nav-wrapper grey">
              <ul className="left hide-on-med-and-down">
                <li className="brand-logo center">Clayton Homes</li>
                <li><Link to='/'>Main Page</Link></li>
                <li><Link to='/Homes'>Inventory</Link></li>
                <li><Link to='/Available'>Availability</Link></li>
              </ul>
            </div>
          </nav>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/Homes" component={Homes} />
          <Route path="/Available" component={Available} />
        </main>
      </div>

      // <div className="container-fluid">
      // <div className="navbar-fixed"></div>
      //   <nav >
      //     <div className="nav-wrapper gray">
      //       <a href="/" className="brand-logo center">Clayton Homes</a>
      //     </div>
      //   </nav>
      // </div>
    );
  }
}

export default App;
