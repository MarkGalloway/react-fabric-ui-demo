import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import EmptyPage from './EmptyPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={EmptyPage}/>
        <Route path="/test" render={() => <div>This is a test.</div>}/>
      </div>
    );
  }
}

export default App;
