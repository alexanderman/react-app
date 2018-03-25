import React from 'react';
import { connect } from 'react-redux';
import DraggablePicture from '../components/DraggablePicture/DraggablePicture';
import { actions } from '../reducers/avatarReducer';

const container = (props) => {
  const { handleDrag } = props;
  return (
    <DraggablePicture {...props} onDrag={handleDrag} />
  );
}

const mapStateToProps = state => ({
  position: state.avatar
});

const mapDispatchToProps = dispatch => ({
  handleDrag: (position) => dispatch({ type: actions.AVATAR_MOVE, payload: position })
});

export default connect(mapStateToProps, mapDispatchToProps)(container);
