import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Homes from './components/Homes';
import Landing from './components/Landing';
import Available from './components/Available';

class App extends Component {
  render() {
    return (
      <div className="row">
          <nav className="grey darken-2">
            <div className="nav-wrapper">   
              <ul className="hide-on-med-and-down right"> 
              <li><a href="/" class="brand-logo center white-text">Clayton Homes</a></li>             

                <li><Link to='/'>Main Page</Link></li>
                <li><Link to='/Homes'>Inventory</Link></li>
                <li><Link to='/Available'>Availability</Link></li> 
                <li>    
                 <div className="center row">
                    <div className="col s12 " >
                      <div className="row" id="topbarsearch">
                        <form>
                          <div className="input-field col s6 s12 white-text">
                            <input type="text" placeholder="search" id="autocomplete-input" className="autocomplete white-text"/>
                          </div>
                        </form>
                        </div>
                      </div>
                    </div>          
                </li>                                
              </ul>
            </div>
          </nav>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/Homes" component={Homes} />
          <Route path="/Available" component={Available} />
        </main>
      </div>
      
    );
  }
}

export default App;
