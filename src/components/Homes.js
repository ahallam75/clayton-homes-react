import React, { Component } from 'react';
import axios from 'axios';
import HomeSingle from './HomeSingle'

class Homes extends Component {
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

  renderItems() {
    return this.state.homes.map((item) => (
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