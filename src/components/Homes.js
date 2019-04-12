import React, { Component } from 'react';
import HomeSingle from './HomeSingle';
import UtilityAPI from './UtilityAPI';

class Homes extends Component {
    constructor(props) {
      super(props);
      this.state = {
        homes: [],
      };
    // console.log(typeof UtilityAPI.getData())
    // console.log(UtilityAPI.getData())
    }

    

    componentDidMount() {
      UtilityAPI.getData().then((homes) => {
        this.setState({
          homes: homes
        })
      });
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
