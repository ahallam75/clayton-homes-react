import React, { Component } from 'react';
import UtilityAPI from './UtilityAPI';
import HomeSingle from './HomeSingle';
import HomeSearch from './HomeSearch';

class Homes extends Component {
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
    console.log(this.state.filteredHomes)

    return (
      <div className="row">
        <HomeSearch homes={this.state.filteredHomes} match={this.props.match} onChange={this.filterHomes} />
        {this.renderItems()}
      </div>
    );
  }
}

export default Homes;


//Ignore everything below

// import React, { Component } from 'react';
// import UtilityAPI from './UtilityAPI';
// import HomeSingle from './HomeSingle';
// import HomeSearch from './HomeSearch';

// class Homes extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         homes: [{Description: 'foo', HomeId: '1'}, {Description: 'foo', HomeId: '2'}, {Description: 'foo', HomeId: '3'}],
//       };
//     }

//     componentDidMount() {
//       UtilityAPI.getData().then((homes) => {
//         this.setState({
//           homes: homes,
//           filteredHomes: []
//         })
//       });
//     }

//     filterHomes = (event) => {
// 			event.preventDefault();
//       const filteredHomes = this.state.homes.filter((home) => {
//         return home.HomeId === event.target.value
//       })
//       this.setState({
//         homes: filteredHomes
//       })
//     }

//     filterHomes = (homeFilter) => {
//       //       let filteredHomes = this.state.homes;
//       //       filteredHomes = filteredHomes.filter((home) => {
//       //         let homeName = home.Description.toLowerCase()
//       //         return homeName.indexOf(
//       //           homeFilter.toLowerCase()) !== -1
//       //       })
//       //       this.setState({
//       //         filteredHomes
//       //       })
//       //     }

//     renderItems() {
//       return this.state.homes.map((item) => (
//         <HomeSingle key={item.Id} item={item} />
//       ));
//     }

// 		handleChange(e) {
// 			e.preventDefault()
// 			console.log(e.target.value);
// 		}

//   render() {
//     console.log(this.state.filteredHomes)

//     return (
// 			<React.Fragment>
// 				<div className="container">
// 					<form>
// 						<label htmlFor="filter">Search for a Home: </label>
// 		        <input type="text" id="filter"
// 		          value={this.state.homeFilter}
// 							onChange={(e) => this.filterHomes(e)} />
// 					</form>
// 	      </div>
// 	      <div className="row">
// 	        {this.renderItems()}
// 	      </div>
// 			</React.Fragment>
//     );
//   }
// }

// export default Homes;




// import React, { Component } from 'react';
// import UtilityAPI from './UtilityAPI';
// import HomeSingle from './HomeSingle';
// import HomeSearch from './HomeSearch';

// class Homes extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         homes: [{Description: 'foo', HomeId: '1'}, {Description: 'foo', HomeId: '2'}, {Description: 'foo', HomeId: '3'}],
//       };
//     }



//     componentDidMount() {
//       // UtilityAPI.getData().then((homes) => {
//       //   this.setState({
//       //     homes: homes,
//       //     filteredHomes: []
//       //   })
//       // });
//     }

//     filterHomes = (homeFilter) => {
//       let filteredHomes = this.state.homes;
//       filteredHomes = filteredHomes.filter((home) => {
//         let homeName = home.Description.toLowerCase()
//         return homeName.indexOf(
//           homeFilter.toLowerCase()) !== -1
//       })
//       this.setState({
//         filteredHomes
//       })
//     }

//     renderItems() {
//       return this.state.homes.map((item) => (
//         <HomeSingle key={item.Id} item={item} />
//       ));
//     }

//   render() {
//     console.log(this.state.homeFilter)

//     return (
// 			<React.Fragment>
// 				<div className="container">
// 	        <label htmlFor="filter">Search for a Home: </label>
// 	        <input type="text" id="filter"
// 	          value={this.state.homeFilter}
//             onChange={this.handleChange}
            
//           />
// 	      </div>
// 	      <div className="row">
// 	        {this.renderItems()}
// 	      </div>
// 			</React.Fragment>
//     );
//   }
// }

// export default Homes;




// //Old material

// // return (
// //   <div className="row">
// //     {this.renderItems()}
// //   </div>
// //   );

// //        {this.state.homes.map((item) => <HomeSingle key={item.Id} item={item} />)}
