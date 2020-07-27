const PREFIX = "[ APP REDUCER ]";
const actions = {
  STORE_PATH: `${PREFIX} STORE_PATH`,
  GET_GRAPH: `${PREFIX} GET_GRAPH`,
  STORE_GRAPH: `${PREFIX} STORE_GRAPH`,
  SET_START_NODE: `${PREFIX} SET_START_NODE`,
};

export default (
  state = {
    graph: [],
    paths: {},
    startNode: ""
  },
  action
) => {
  switch (action.type) {
    case actions.GET_PATHS:
      return {
        ...state,
        paths: {}
      };
    case actions.STORE_GRAPH:
      return {
        ...state,
        graph: action.payload
      };
    case actions.STORE_PATH:
      return {
        ...state,
        paths: action.payload
      };
    case actions.SET_START_NODE:
      return {
        ...state,
        startNode: action.payload
      };
    default:
      return state;
  }
};


export {
  actions
};
