import { SET_LANGAUGE } from '../actionTypes';

const initialState = {
  language: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LANGAUGE: {
      return {
        ...state,
        language: payload,
      };
    }
    default: return state;
  }
};
