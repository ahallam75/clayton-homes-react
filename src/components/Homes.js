import React, { Component } from 'react';
import HomeSingle from './AvailableSingle';
import getData from './UtilityAPI';

class Homes extends Component {
    constructor(props) {
      super(props);
      this.state = {
        homes: [],
      };
    }

    componentDidMount() {
      this.state.homes = getData();
      // this.setState({
      //   homes: getData()
      // })
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


//Old material

// return (
//   <div className="row">
//     {this.renderItems()}
//   </div>
//   );

//        {this.state.homes.map((item) => <HomeSingle key={item.Id} item={item} />)}
