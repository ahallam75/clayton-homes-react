import React, { Component } from 'react';
import UtilityAPI from './UtilityAPI';
import AvailableSingle from './AvailableSingle';
import HomeSearch from './HomeSearch';

class Available extends Component {
    constructor(props) {
      super(props);
      this.state = {
        homes: [],
        filteredHomes: null
      };
    }

    componentDidMount() {
      UtilityAPI.getData().then((homes) => {
        this.setState({
          homes: homes,
          filteredHomes: this.state.homes.IsModel === true
        })
      });
    }

    filterHomes = (homeFilter) => {
      let filteredHomes = this.state.homes;
      filteredHomes = filteredHomes.filter((home) => {
        let homeName = home.Description.toLowerCase()
        let model = home.HomeId.toLowerCase()
        return ((homeName.indexOf(homeFilter.toLowerCase()) !== -1 || model.indexOf(homeFilter.toLowerCase()) !== -1) && home.IsModel === true)
      })
      this.setState({
        filteredHomes
      })
    }
        
    renderHomes() {
      if (this.state.filteredHomes) {
          return this.state.filteredHomes.map((item) => (
          <AvailableSingle key={item.Id} item={item} />
          ));
       } else {
          return this.state.homes.filter((home) => home.IsModel === true).sort(function(a, b){
            if(a.Description < b.Description) { return -1; }
            if(a.Description > b.Description) { return 1; }
            return 0;
        }).map((item) => (
          <AvailableSingle key={item.Id} item={item} />
        ));
       }
    }

  render() {
    return (
      <div className="row">
        <HomeSearch homes={this.state.filteredHomes} match={this.props.match} onChange={this.filterHomes} />
        <h5>Available Homes</h5>
        {this.renderHomes()}
      </div>
    );
  }
}

export default Available;
