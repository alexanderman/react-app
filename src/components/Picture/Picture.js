import React from 'react';
import './Picture.css';
import defaultImage from '../../angry-cat.jpg';

const Picture = (props) => {
  const { imageUrl=defaultImage, className='' } = props;
  const divStyle = {
    backgroundImage: `url("${imageUrl}")`
  };

  return (
    <div style={divStyle} className={`picture${className ? ' ' + className : ''}`}></div>
  );
};


export default Picture;