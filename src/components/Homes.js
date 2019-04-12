import React, { Component } from 'react';
import UtilityAPI from './UtilityAPI';
import HomeSingle from './HomeSingle';
import HomeSearch from './HomeSearch';

class Homes extends Component {
    constructor(props) {
      super(props);
      this.state = {
        homes: [],
      };
    }

    

    componentDidMount() {
      UtilityAPI.getData().then((homes) => {
        this.setState({
          homes: homes,
          filteredHomes: []
        })
      });
    }

    filterHomes = (homeFilter) => {
      let filteredHomes = this.state.homes
      filteredHomes = filteredHomes.filter((home) => {
        let homeName = home.Description.toLowerCase()
        return homeName.indexOf(
          homeFilter.toLowerCase()) !== -1
      })
      this.setState({
        filteredHomes
      })
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
        <Homes homes={this.state.filteredHomes} match={this.props.match} onChange={this.filterHomes} />
      </div>
    );
  }
}

export default Homes;


//Old material

// return (
//   <div className="row">
//     {this.renderItems()}
//   </div>
//   );

//        {this.state.homes.map((item) => <HomeSingle key={item.Id} item={item} />)}
