import React from 'react';

import AppBar from '../AppBar';
import NavBar from '../NavBar';

const propTypes = {
  history: React.PropTypes.object.isRequired,
  match: React.PropTypes.object.isRequired
}

function EmptyPage({match, history}) {
  return (
    <div>
      <AppBar/>
      <NavBar match={match} history={history}/>
      <div style={{padding: '2%'}}>
        This page is intentionally left blank.
      </div>
    </div>
  )
}

EmptyPage.propTypes = propTypes;

export default EmptyPage;
