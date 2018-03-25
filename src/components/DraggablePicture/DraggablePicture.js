import React from 'react';
import Draggable from 'react-draggable'
import './DraggablePicture.css';
import Picture from '../Picture/Picture';

const defaultPosition = {
  x: 0, 
  y: 0
}

const doNothing = (offsetPosition) => { console.log(offsetPosition) };

const DraggablePicture = (props) => {
  const { position=defaultPosition, onDrag=doNothing } = props;

  const handleDrag = (e, data) => {
    onDrag({ x:data.x, y:data.y });
  }

  const handleStop = (e, data) => {
    /** I could use only this method to store new position, but I wanted to show functionality of redux-observable */
  }

  return (
    <Draggable
      defaultPosition={position}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <div className="draggable-pic">
        <Picture {...props} />
      </div>
    </Draggable>
  );
};


export default DraggablePicture;