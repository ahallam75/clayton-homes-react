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
            search: '',
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

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  handleClick(event) {
    console.log("do something on clicking button")
  }

  render() {

    let filteredHomes = this.state.homes.toLowerCase().filter((item) => {
      return item.HomeId.indexOf(this.state.search.toLowerCase()) !== -1;
    });

    return (
      <div>
        <form>
          <input type="text"
            placeholder="search" 
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
          <button onClick={(e) => this.handleClick(e)}>
            Search
          </button>
        </form>
        <ul>
          {filteredHomes.map((item) => {
            return <Homes homes={item} key={homes.Id} />
          })}
        </ul>
      </div>
    );
  }
}

export default Homes;

//Older version

// return (
//   <div className="row">
//     {this.renderItems()}
//   </div>
// );