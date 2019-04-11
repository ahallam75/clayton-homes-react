import React, { Component } from 'react';
//import axios from 'axios';
import HomeSingle from './HomeSingle'

class Homes extends Component {

  renderItems() {
    return this.props.homes.map((item) => (
      <HomeSingle key={item.Id} item={item} />
    ));
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }
}

export default Homes;