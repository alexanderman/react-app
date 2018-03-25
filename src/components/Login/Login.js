import React, { Component } from 'react';

import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username || '',
      password: props.password || ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit=()=>{} } = this.props;
    onSubmit(this.state);
  }

  usernameChanged = (e) => {
    this.setState({ username: e.target.value });
  }

  passwordChanged = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <form className="login-form">
        <h1 className="login-header">Login</h1>
        <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.usernameChanged} />
        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.passwordChanged} />
        <input type="submit" value="Let me in." onClick={this.handleSubmit} />
      </form>
    );
  }

}

