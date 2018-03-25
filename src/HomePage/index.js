import React from 'react';
import { Link } from 'react-router-dom';
import DraggablePictureContainer from './DraggablePictureContainer';

const HomePage = (props) => (
  <div>
    {/* <h1>Home</h1> */}
    <Link to="/login">login</Link>
    <DraggablePictureContainer />
  </div>
);

export default HomePage;