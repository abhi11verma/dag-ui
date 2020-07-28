import Cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import {isEmpty} from 'lodash';
import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

Cytoscape.use(dagre);

function Graph({graphData}) {
  return (
    isEmpty(graphData) ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>GRAPH DATA NOT
                         AVAILABLE</div> :
    <CytoscapeComponent
      elements={graphData}
      style={{width: '100%', height: '100%', background: '#673ab7', display: 'flex'}}
      layout={{name: 'dagre'}}
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
