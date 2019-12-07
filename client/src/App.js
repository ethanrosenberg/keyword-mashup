import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomeContainer from './containers/HomeContainer'


import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <Switch>
      <Route exact path="/" component={HomeContainer} />
    </Switch>

    </div>
  );
}

export default App;
