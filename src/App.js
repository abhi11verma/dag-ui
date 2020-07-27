import React from 'react';
import './App.css';
import GraphInput from "./Components/GraphInput";
import Graph from "./Components/Graphs";

function App({}) {
  return (
    <div className="App">
      <div id="graphDataWrapper">
        <div id="graphData">
          <GraphInput/>
        </div>
        <div id="paths"></div>
      </div>
      <div id="graph">
        <Graph/>
      </div>
    </div>
  );
}

export default App;
