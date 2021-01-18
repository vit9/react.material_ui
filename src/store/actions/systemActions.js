import { SET_LANGAUGE, ALERT, SEARCH_STROKE } from '../actionTypes';

export const languageAction = (payload) => ({
  type: SET_LANGAUGE,
  payload,
});

export const alertAction = (payload) => ({
  type: ALERT,
  payload,
});

export const searchStrokeAction = (payload) => ({
  type: SEARCH_STROKE,
  payload,
});
