import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Homes from './components/Homes';
import Available from './components/Available';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: [],
    };
  }

  componentDidMount() {
    const url = process.env.REACT_APP_CLAYTON_HOMES_API_KEY 

    // fetch(url)
    // .then((response) => {
    //   return response.json();
    // })
    // .then((data) => {
    //   this.setState({
    //     homes: data.Homes
    //   })
    // })
    // .catch((error) => {
    //   this.setState({
    //     error: true
    //   })
    // });

    axios.get(url)
      .then((response) => {
        this.setState({
          homes: response.data.Homes
        })
      })
      .catch((error) => console.log(error));
  }  



  render() {

    const homes = this.homes;

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
        <Homes homes={homes}/>
      </div> 
    );
  }
}

export default App;
