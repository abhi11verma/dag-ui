import {graphFormator, pathFormator} from "common/formator";
import {modes} from "common/helpers";
import GraphInput from "Components/GraphInput";
import GraphPaths from "Components/GraphPaths";
import Graph from "Components/Graphs";
import React, {useEffect, useState} from 'react';
import './App.css';


function App({graph, getGraph, startNode, paths, setStartNode, getPath, createGraph, editGraph,serverGraphData,addNode}) {

  useEffect(() => {
    getGraph();
  }, []);

  const [graphMode, setGraphMode] = useState(modes.GRAPH);

  const graphData = graphMode === modes.GRAPH ? graphFormator(graph) : pathFormator(paths);

  return (
    <div className="App">
      <div id="graphDataWrapper">
        <div id="graphData">
          <GraphInput value={graph} startNode={startNode} setStartNode={setStartNode} getPath={getPath}
                      serverGraphData={serverGraphData}
                      getGraph={getGraph}
                      createGraph={createGraph} editGraph={editGraph}/>
        </div>
        <div id="paths">
          <GraphPaths paths={paths} setGraphMode={setGraphMode} graphMode={graphMode} addNode={addNode}/>
        </div>
      </div>
      <div id="graph">
        <Graph graphData={graphData}/>
      </div>
    </div>
  );
}

export default App;
