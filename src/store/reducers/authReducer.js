import { SIGN_IN_SUCCESS, SIGN_IN_FAIL } from '../actionTypes';

const initialState = {
  'sign-in': {
    success: null,
    error: null,
  },
  'sign-up': {
    success: null,
    error: null,
  },
};

export default function authReducer(state = initialState, { type, payload, name }) {
  switch (type) {
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        [name]: {
          ...state[name],
          success: true,
        },
      };
    }
    case SIGN_IN_FAIL: {
      return {
        ...state,
        [name]: {
          ...state[name],
          success: false,
          error: payload,
        },
      };
    }
    default: return state;
  }
}
