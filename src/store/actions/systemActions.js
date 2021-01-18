import { SET_LANGAUGE, ALERT } from '../actionTypes';

export const languageAction = (payload) => ({
  type: SET_LANGAUGE,
  payload,
});

export const alertAction = (payload) => ({
  type: ALERT,
  payload,
});
