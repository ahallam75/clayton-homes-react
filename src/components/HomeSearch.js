import React, { Component } from 'react';

class HomeSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeFilter: ""
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      homeFilter: event.target.value
    })

    this.props.onChange(event.target.value)
  }
  
  render() {
    return (
      <div className="container">
        <label id="label" htmlFor="filter"><h6>Search for a Home:</h6></label>
        <input type="text" id="filter" placeholder="Enter Home Name or Serial/Model Number"
          value={this.state.homeFilter} 
          onChange={this.handleChange}/>
      </div>
    )
  }
}

export default HomeSearch;
