import {graphFormator,pathFormator} from "common/formator";
import Cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import {isEmpty} from 'lodash'

Cytoscape.use(dagre);

function Graph({graphData}) {

  const elements = pathFormator(graphData);

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
