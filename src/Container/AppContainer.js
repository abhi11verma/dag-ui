import {createGraph, editGraph, getGraph, getPath, setStartNode} from "actions/AppAction";
import {connect} from 'react-redux';
import App from '../App';

const mapStateToProps = ({app: {graph, startNode, paths,graphFormatText}}) => (
  {
    graph,
    startNode,
    paths,
    graphFormatText
  }
);

export default connect(mapStateToProps, {getGraph, setStartNode, getPath,createGraph,editGraph})(App);
