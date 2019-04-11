import React, { Component } from 'react';
//import axios from 'axios';
import HomeSingle from './HomeSingle';


class Homes extends Component {
  constructor(props) {
    super(props);
    this.homes = props.homes;
  }

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
    // return (
    //   <div className="row">
    //     {this.props.homes.map((item) => <HomeSingle key={item.Id} item={item} />)}
    //   </div>
    // );
  }
}

export default Homes;