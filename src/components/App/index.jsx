import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

import Appraisals from '../Appraisals';
import EmptyPage from './EmptyPage';

import './App.css';

const propTypes = {};

class App extends Component {
  render() {
    return (
      <Fabric>
        <Switch>
          <Route path="/appraisals" component={Appraisals}/>
          <Route path="/tasks" component={EmptyPage}/>
          <Route path="/appointments" component={EmptyPage}/>
          <Redirect from='/' to='/appraisals'/>
        </Switch>
      </Fabric>
    );
  }
}

App.propTypes = propTypes;

export default App;
