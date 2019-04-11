import React from 'react';
import axios from 'axios';

class UtilityAPI extends Component {
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
        homes: response.data.Homes
      })
    })
    .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <Homes homes={this.state.homes} />
        <Available homes={this.state.homes} />
      </div>
    );
  }
  
}

export default UtilityAPI;