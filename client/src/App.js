import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomeContainer from './containers/HomeContainer'

import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
