import React from 'react';

class HomeSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeFilter: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      homeFilter: event.target.value
    })
    this.props.onChange(event.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">Search for a home: </label>
        <input type="text" id="filter" 
          value={this.state.homeFilter} 
          onChange={this.handleChange}/>
      </div>
    )
  }
}

export default HomeSearch;
