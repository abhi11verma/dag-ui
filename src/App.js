import GraphInput from "Components/GraphInput";
import GraphPaths from "Components/GraphPaths";
import Graph from "Components/Graphs";
import React, {useEffect} from 'react';
import './App.css';

function App({graph,getGraph,startNode,paths,setStartNode,getPath}) {

  useEffect(() => {
    getGraph();
  }, []);

  return (
    <div className="App">
      <div id="graphDataWrapper">
        <div id="graphData">
          <GraphInput value={graph} startNode={startNode} setStartNode={setStartNode} getPath={getPath}/>
        </div>
        <div id="paths">
          <GraphPaths paths={paths} />
        </div>
      </div>
      <div id="graph">
        <Graph graphData={paths}/>
      </div>
    </div>
  );
}

export default App;
