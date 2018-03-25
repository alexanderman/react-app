
const initialState = {
  user: undefined,
  error: undefined,
  isLoginRequested: false,
  credentials: {
    username: 'alexander'
  }
};

export const actions = {
  LOGIN_REQUEST: 'user.login_request',
  LOGIN_SUCCESS: 'user.login_success',
  LOGIN_FAIL: 'user.login_fail',
  LOGOUT: 'user.logout'
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST: {
      return {...state, 
        error: undefined,
        isLoginRequested: true,
        credentials: action.payload 
      };
    }

    case actions.LOGIN_SUCCESS: {
      return {...state, 
        user: action.payload, 
        error: undefined, 
        isLoginRequested: false,
        credentials: undefined
      };
    }

    case actions.LOGIN_FAIL: {
      return {...state, 
        error: action.payload, 
        isLoginRequested: false
      };
    }
    
    case actions.LOGOUT: {
      return {...state, 
        error: action.payload, 
        isLoginRequested: false,
        user: undefined
      };
    }
    
    default: {
      return state;
    }
  }
};

export default userReducer;