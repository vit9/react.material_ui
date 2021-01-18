import { SET_LANGAUGE, ALERT } from '../actionTypes';

const initialState = {
  language: 'en',
  alert: {
    open: false,
    severity: '',
    message: '',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LANGAUGE: {
      return {
        ...state,
        language: payload,
      };
    }
    case ALERT: {
      return {
        ...state,
        alert: {
          ...state.alert,
          open: payload.open,
          severity: payload.severity,
          message: payload.message,
        },
      };
    }
    default: return state;
  }
};
