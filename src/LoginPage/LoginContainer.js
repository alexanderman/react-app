import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { actions } from '../reducers/userReducer';

const container = (props) => {
  const { handleSubmit } = props;
  return (
    <Login {...props} onSubmit={handleSubmit} />
  );
}

const mapStateToProps = state => ({
  ...state.user.credentials
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (credentials) => dispatch({ type: actions.LOGIN_REQUEST, payload: credentials })
});

export default connect(mapStateToProps, mapDispatchToProps)(container);
