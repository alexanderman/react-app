/**
 * TODO: manage routes, check if user is logged, if yes allow home page
 */

import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import HomePage from './HomePage';
import Login from './LoginPage';
// import Routes from './Routes';
import './App.css';

/** BrowserRouter works with browser history */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        {/* <Routes> */}
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/home" component={HomePage} />
            </Switch>
          </Router>
        {/* </Routes> */}
      </Provider>
    );
  }
}

export default App;
