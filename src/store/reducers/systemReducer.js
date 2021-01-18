import { SET_LANGAUGE, ALERT, SEARCH_STROKE } from '../actionTypes';

const initialState = {
  language: 'en',
  alert: {
    open: false,
    severity: '',
    message: '',
  },
  searchStroke: false,
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
    case SEARCH_STROKE: {
      return {
        ...state,
        searchStroke: payload,
      };
    }
    default: return state;
  }
};
