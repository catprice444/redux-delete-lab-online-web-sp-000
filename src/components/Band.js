
import React, { Component } from 'react';

class Band extends Component {
  render() {
    return(
        <li key={this.props.band.id}>{this.props.name}
            <button onClick={() => this.props.delete(this.props.band.id)}>Delete this stupid band</button>
        </li>
    );
  }
};

export default Band;