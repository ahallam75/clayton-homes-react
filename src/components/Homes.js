import React, { Component } from 'react';

class Homes extends Component {
  renderItems() {
    return this.props.items.map((item) => (
      <HomeSingle key={item.id} item={item} />
    ));
  }

  render() {
    return (
      <ul className="row">
        {this.renderItems()}
      </ul>
    );
  }
}

export default Homes;