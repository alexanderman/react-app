import React from 'react';
import { Link } from 'react-router-dom';

import LoginContainer from './LoginContainer';


const LoginPage = (props) => (
  <div style={{ marginTop: '50px' }}>
    <Link to="/home">home</Link>

    <LoginContainer />  
  </div>
);

export default LoginPage;