import React, { Component } from 'react';
import Band from './Band.js';

class Bands extends Component {
  render() {
    return(
      <ul>
        {this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} name={band.name}/>)}
      </ul>
    );
  }
};

export default Bands;