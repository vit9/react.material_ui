import axios from 'axios';
import {
  SIGN_IN_SUCCESS, SIGN_UP_SUCCESS, SIGN_IN_FAIL, SIGN_UP_FAIL,
} from '../actionTypes';
import { alertAction } from './systemActions';

export const signInAction = (error, credo) => async (dispatch) => {
  console.log(credo);
  if (error) {
    dispatch({
      type: SIGN_IN_FAIL,
      payload: error,
      name: 'sign-in',
    });
    return dispatch(alertAction({ message: 'test', severity: 'error', open: true }));
  }
  try {
    // const result = await axios.post('/sign-in', credo);
    return dispatch({
      type: SIGN_IN_SUCCESS,
      name: 'sign-in',
    });
  } catch (error) {
    return dispatch({
      type: SIGN_IN_FAIL,
      payload: error,
      name: 'sign-in',
    });
  }
};

export const signUpAction = (error, credo) => (dispatch) => {
  if (error) {
    dispatch(alertAction({ message: 'test from sign-up', severity: 'error', open: true }));
    return dispatch({
      type: SIGN_UP_FAIL,
      payload: error,
      name: 'sign-un',
    });
  }
  try {
    // const result = await axios.post('/sign-un', credo);
    return dispatch({
      type: SIGN_UP_SUCCESS,
      name: 'sign-up',
    });
  } catch (error) {
    dispatch(alertAction({ message: 'test from sign-up', severity: 'error', open: true }));
    return dispatch({
      type: SIGN_UP_FAIL,
      payload: error,
      name: 'sign-up',
    });
  }
};
