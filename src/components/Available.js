import React, { Component } from 'react';
import axios from 'axios';
//import AvailableSingle from './AvailableSingle'

class Available extends Component {
    constructor(props) {
      super(props);
      this.state = {
        availableHomes: [],
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
            availableHomes: response.data.Homes
          })
        })
        .catch((error) => console.log(error));
    }

  // renderItems() {
  //   return this.state.availableHomes.map((item) => (
  //     <AvailableSingle key={item.Id} item={item} />
  //   ));
  // }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }
}

export default Available;
