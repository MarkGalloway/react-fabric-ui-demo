import React, { Component } from 'react';

import Filters from './Filters';

const propTypes = {};

export class List extends Component {
  render() {
    return (
      <div>
        <Filters/>
      </div>
    );
  }
}

List.propTypes = propTypes;

export default List;
