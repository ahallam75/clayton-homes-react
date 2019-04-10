import React from 'react';
import Homes from './Homes';

class SearchHomes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  render() {
    
    let filteredHomes = this.props.homes.toLowerCase().filter((item) => {
      return item.HomeId.indexOf(this.state.search.toLowerCase()) !== -1;
    });

    return (
      <div>
        <input type="text" 
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <ul>
          {filteredHomes.map((item) => {
            return <Homes homes={item} key={homes.Id} />
          })}
        </ul>
      </div>
    )
  }
}


export default SearchHomes;