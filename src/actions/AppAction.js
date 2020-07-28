import {apiAction, dataAction} from "actions/actionWrappers";
import {fetchGraph, fetchPaths, postGraph} from "api/appAPI";
import {actions} from "reducers/AppReducer";

const getGraph = () => async dispatch => {
  try {
    const graph = await dispatch(apiAction(fetchGraph));
    dispatch(dataAction(actions.STORE_GRAPH,graph));
  } catch (e) {
    console.log("Can't get graph");
  }
};
const getPath = (startNode) => async dispatch => {
  try {
    const paths = await dispatch(apiAction(fetchPaths,{startNode}));
    dispatch(dataAction(actions.STORE_PATH,paths));
  } catch (e) {
    console.log("Can't get PATHS");
  }
};

const createGraph = (graph) => async dispatch => {
  try {
    await dispatch(apiAction(postGraph, {graph}));
  } catch (e) {
    console.log("Error Creating graph", e);
  }
};

const setStartNode = (node) => dispatch => {
    dispatch(dataAction(actions.SET_START_NODE,node));
};

const editGraph = (graph) => dispatch => {
    dispatch(dataAction(actions.EDIT_GRAPH,graph));
};


//Todo :Proper error handeling and edge cases


export {getGraph,setStartNode,getPath,editGraph,createGraph};
