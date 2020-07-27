
export const staticAction = (type) => (dispatch) => dispatch({type});

export const dataAction = (type, payload) => (dispatch) => dispatch({type, payload});

export const silentApiAction = (fn, ...args) => async (dispatch, getState) => {
  return await fn(...args);
};

export const apiAction = (fn, ...args) => async (dispatch) => {
  // dispatch(staticAction('LOADER_SHOW'));
  try {
    return await dispatch(silentApiAction(fn, ...args));
  }
  finally {
    // dispatch(staticAction('LOADER_HIDE'));
  }
};
