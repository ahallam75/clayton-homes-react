import React, { Component } from 'react';
import UtilityAPI from './UtilityAPI';
import AvailableSingle from './AvailableSingle';
import HomeSearch from './HomeSearch';

class Available extends Component {
    constructor(props) {
      super(props);
      this.state = {
        homes: []
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

    
  

    // renderItems() {
    //   return this.state.homes.map((item) => (
    //     <HomeSingle key={item.Id} item={item} />
    //   ));
    // }

    // renderFilteredHomes() {
    //   return this.state.filteredHomes.map((item) => (
    //     <HomeSingle key={item.Id} item={item} />
    //   ));
    // }


    renderHomes() {
      console.log(this.state.filteredHomes)

      if (this.state.filteredHomes) {
          return this.state.filteredHomes.map((item) => (
          <AvailableSingle key={item.Id} item={item} />
          ));
       } else if (!this.state.filterdHomes) {
          return this.state.homes.map((item) => (
          <AvailableSingle key={item.Id} item={item} />
        ));
       }
    }
       
  render() {

    return (
      <div className="row">
        <HomeSearch homes={this.state.filteredHomes} match={this.props.match} onChange={this.filterHomes} />
        {this.renderHomes()}
      </div>
    );
  }
}

export default Available;




// import React, { Component } from 'react';
// import axios from 'axios';
// import AvailableSingle from './AvailableSingle'
// import HomeSearch from './HomeSearch';

// class Available extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         availableHomes: [],
//       };
//     }

//     componentDidMount() {
//       const url = process.env.REACT_APP_CLAYTON_HOMES_API_KEY 

//       // fetch(url)
//       // .then((response) => {
//       //   return response.json();
//       // })
//       // .then((data) => {
//       //   this.setState({
//       //     homes: data.Homes
//       //   })
//       // })
//       // .catch((error) => {
//       //   this.setState({
//       //     error: true
//       //   })
//       // });

//       axios.get(url)
//         .then((response) => {
//           this.setState({
//             availableHomes: response.data.Homes
//           })
//         })
//         .catch((error) => console.log(error));
//     }

//   renderItems() {
//     return this.state.availableHomes.map((item) => (
//       <AvailableSingle key={item.Id} item={item} />
//     ));
//   }

//   render() {
//     return (
//       <div className="row">
//         <HomeSearch />
//         {this.renderItems()}
//       </div>
//     );
//   }
// }

// export default Available;
