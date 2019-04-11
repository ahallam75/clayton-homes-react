import axios from 'axios';

const url = process.env.REACT_APP_CLAYTON_HOMES_API_KEY

function getData() {
  return axios.get(url)
    .then((response) => {
      return response.data.Homes || [];
    })
    .catch((error) => {console.log(error); return [];});
 }

export default {getData};