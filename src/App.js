import React from 'react';
import './App.css';
import Graph from "./Components/Graphs";

function App() {
  return (
    <div className="App">
      <div id="graphDataWrapper">
        <div id="graphData"></div>
        <div id="paths"></div>
      </div>
      <div id="graph">
        <Graph/>
      </div>
    </div>
  );
}

export default App;
