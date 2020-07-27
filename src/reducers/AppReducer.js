const actions = {
  GOOGLE_LOGIN_REQUEST: "[auth] GOOGLE_LOGIN_REQUEST",
  GOOGLE_LOGIN_SUCCESS: "[auth] GOOGLE_LOGIN_SUCCESS",
};

export default (
  state = {
    elements:[]
  },
  action
) => {
  switch (action.type) {
    case actions.RESET_ERROR_MESSAGE:
      return {
        ...state,
        loginErrorMessage: null,
        loginError: false
      };
    case actions.GOOGLE_LOGIN_REQUEST:
      return {
        ...state,
        provider: loginType.GOOGLE,
        isLoggingIn: true,
        loginError: false
      };
    default:
      return state;
  }
};


export {
  actions
};
