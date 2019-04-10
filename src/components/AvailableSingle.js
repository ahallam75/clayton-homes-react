import React from 'react';

const AvailableSingle = ({item}) => (
  <div>
    <div>
      <form>
        <div className="input-field">
          <input id="search" type="search" required/>
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
    <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img src={item.ThumbnailImage} alt={item.Description}/>
          <span className="card-title">{item.Description}</span>
        </div>
        <div className="card-content">
          <p>{item.Description}</p>
          <p>{item.HomeId}</p>
        </div>
        <div className="card-action">
          <a href={item.ThumbnailImage} target="_blank" rel="noopener noreferrer">Click for Full Image</a>
        </div>
      </div>
    </div>
  </div>
);

export default AvailableSingle;