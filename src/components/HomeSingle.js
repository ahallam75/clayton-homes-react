import React from 'react';

const HomeSingle = ({item}) => (
  
  <div className="col s4">
    <div className="card large">
      <div className="card-image">
        <img src={item.ThumbnailImage} alt={item.Description}/>
        <span className="card-title">{item.Description}</span>
      </div>
      <div className="card-content">
        <p>Name: {item.Description}</p>
        <p>Serial Number: {item.HomeId}</p>
      </div>
      <div className="card-action">
        <a href={item.ThumbnailImage} target="_blank" rel="noopener noreferrer">Click for Full Image</a>
      </div>
    </div>
  </div>
  
);

export default HomeSingle;
