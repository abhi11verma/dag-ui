import {getGraph, getPath, setStartNode} from "actions/AppAction";
import {connect} from 'react-redux';
import App from '../App';

const mapStateToProps = ({app: {graph, startNode, paths}}) => (
  {
    graph,
    startNode,
    paths
  }
);

export default connect(mapStateToProps, {getGraph, setStartNode, getPath})(App);
