import React from 'react';


function GraphPaths({paths}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: 1, height: '100%'}}>
      <p style={{fontSize:18}}>{JSON.stringify(paths)}</p>
    </div>
  );
}

export default GraphPaths;
