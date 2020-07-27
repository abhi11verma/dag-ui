import {getAuthDetails} from "common/helpers";

export const staticAction = (type) => (dispatch) => dispatch({type});

export const dataAction = (type, payload) => (dispatch) => dispatch({type, payload});

export const silentApiAction = (fn, ...args) => async (dispatch, getState) => {
  const {auth: {idToken}} = getState();
  const emailAuth = getAuthDetails();
  const auth = {...emailAuth, idToken}
  return await fn(...args, auth);
};

export const apiAction = (fn, ...args) => async (dispatch) => {
  dispatch(staticAction('LOADER_SHOW'));
  try {
    return await dispatch(silentApiAction(fn, ...args));
  }
  finally {
    dispatch(staticAction('LOADER_HIDE'));
  }
};
