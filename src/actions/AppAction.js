import {apiAction, dataAction} from "actions/actionWrappers";
import {fetchGraph, fetchPaths, postGraph, postNode} from "api/appAPI";
import {actions} from "reducers/AppReducer";
import {toNumber,map} from 'lodash';

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
    await dispatch(apiAction(postGraph, graph));
    dispatch(getGraph());
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


const addNode = (parent, value) => async dispatch => {
  let numericValueArray = map(value,val=>toNumber(val));
  try {
    await dispatch(apiAction(postNode, {parent, numericValueArray}));
    await dispatch(getGraph());
  } catch (e) {
    console.log("Error Creating Node");
  }
};


//Todo :Proper error handeling and edge cases


export {getGraph, setStartNode, getPath, editGraph, createGraph, addNode};
