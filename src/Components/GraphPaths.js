import {modes} from "common/helpers";
import React from 'react';


function GraphPaths({paths, graphMode, setGraphMode}) {


  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: 1, height: '100%'}}>
      <p style={{fontSize:18}}>{JSON.stringify(paths)}</p>
      <div style={{display: 'flex', flexDirection: 'row',marginTop:'auto'}}>
        <div style={{
          flex: 1,
          backgroundColor: graphMode === modes.GRAPH ? '#2196F3' : '#607D8B',
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff'
        }}
             onClick={() => setGraphMode(modes.GRAPH)}
        >GRAPH
        </div>
        <div style={{
          flex: 1,
          backgroundColor: graphMode === modes.PATH ? '#2196F3' : '#607D8B',
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff'
        }}
             onClick={() => setGraphMode(modes.PATH)}
        >PATH
        </div>
      </div>
    </div>
  );
}

export default GraphPaths;
