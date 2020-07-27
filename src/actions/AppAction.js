import {apiAction, dataAction} from "actions/actionWrappers";
import {fetchGraph, fetchPaths} from "api/appAPI";
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
    console.log("here");
    const paths = await dispatch(apiAction(fetchPaths,{startNode}));
    dispatch(dataAction(actions.STORE_PATH,paths));
  } catch (e) {
    console.log("Can't get PATHS");
  }
};

const setStartNode = (node) => dispatch => {
    dispatch(dataAction(actions.SET_START_NODE,node));
};





export {getGraph,setStartNode,getPath};
