import {isEmpty} from 'lodash';
import React from 'react';


function GraphInput({value, startNode, setStartNode, getPath}) {
  const handleClick = () => {
    getPath(startNode);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: 1, height: '100%'}}>
      <label>Enter graph : </label>
      <textarea
        style={{width: '100%', height: '100%',fontSize:16}}
        value={JSON.stringify(value)}
      />
      <div>
        <label>Specify Start Node </label>
        <input value={startNode} onChange={(e) => setStartNode(e.target.value)}/>
      </div>
      <div style={{
        backgroundColor: "#f44336",
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: "#ffffff",
        fontWeight: 'bold'
      }}
           onClick={()=>handleClick()}
      >GET PATHS
      </div>
    </div>
  );
}

export default GraphInput;
