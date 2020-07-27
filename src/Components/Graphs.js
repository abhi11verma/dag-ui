import graphFormator from "common/formator";
import Cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import {isEmpty} from 'lodash'

Cytoscape.use(dagre);

function Graph({graph}) {

  const elements = graphFormator(graph);
  console.log("Elements",elements);
  //
  // const elements = [
  //   {data: {id: '1'}},
  //   {data: {id: '2'}},
  //   {data: {id: '3'}},
  //   {data: {id: '4'}},
  //   {data: {id: '5'}},
  //   {data: {id: '6'}},
  //   {data: {id: '7'}},
  //   {data: {id: '1"2', source: '1', target: '2'}},
  //   // {data: {id: '13', source: '1', target: '3'}},
  //   // {data: {id: '14', source: '1', target: '4'}},
  //   // {data: {id: '35', source: '3', target: '5'}},
  //   {data: {id: '36', source: '3', target: '6'}},
  //   {data: {id: '46', source: '4', target: '6'}},
  //   {data: {id: '75', source: '7', target: '5'}},
  // ];

  // const elements=[{data:{id:"2"}},{data:{id:"3"}},{data:{id:"4"}},{data:{id:"5"}},{data:{id:"1"}},{data:{id:"6"}},{data:{id:"2"}},{data:{id:"7"}},{data:{id:"3"}},{data:{id:"8"}},{data:{id:"4"}},{data:{id:"5"}}];



  return (
    isEmpty(elements)?<div>Graph</div>:
    <CytoscapeComponent
      elements={elements}
      style={{width: '100%', height: '100%', background: '#673ab7', display: 'flex'}}
      layout={{name: 'dagre'}}
      userZoomingEnabled={false}
      stylesheet={[
        {
          selector: 'node',
          style: {
            content: 'data(id)',
            backgroundColor: '#f44336',
          }
        },
        {
          selector: 'edge',
          style: {
            curveStyle: 'bezier',
            targetArrowShape: 'triangle',
            width: '3',
            lineColor: '#ffc107',
            targetArrowColor: '#ff9800'
          }
        }
      ]}
    />
  );

}

export default Graph;
