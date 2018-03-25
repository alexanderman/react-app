/** TODO: this component makes sure only logged in users can access content pages */

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

/** BrowserRouter works with browser history */
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './LoginPage';


function isLoggedIn(user) {
  return Boolean(user.user);
}


class Routes extends Component {
  constructor(props) {
    super(props);
  }

  loginOrContent = () => {
    const { user } = this.props;
    if (isLoggedIn(user)) {
      return <Redirect to="/home" />;
      // return <HomePage />;
    } else {
      return <Redirect to="/login" />;
    }
  }


  render() {
    const { user } = this.props;
    return this.loginOrContent();
  }
}


const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps)(Routes);
