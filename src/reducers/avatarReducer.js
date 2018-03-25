export const actions = {
  AVATAR_MOVE: 'avatar.moved',
  AVATAR_PERSIST: 'avatar.persist',
  AVATAR_PERSIST_FAIL: 'avatar.persist.fail'
};

const initialState = {
  x: 0,
  y: 0
};

const avatarReducer = (state=initialState, action) => {
  switch (action.type) {

    case actions.AVATAR_MOVE: {
      return action.payload;
    }

    case actions.AVATAR_PERSIST: {
      return state;
    }

    case actions.AVATAR_PERSIST_FAIL: {
      return state;
    }

    default: {
      return state;
    }
  }
}

export default avatarReducer;