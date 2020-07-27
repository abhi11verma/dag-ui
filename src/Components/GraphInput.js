import React from 'react';


function GraphInput() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: 1, height: '100%'}}>
      <label>Enter graph : </label>
      <textarea
        style={{width: '100%', height: '100%'}}
        value={"Hello"}
      />
      <div style={{
        backgroundColor: "#f44336",
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: "#ffffff",
        fontWeight: 'bold'
      }}>SUBMIT
      </div>
    </div>
  );
}

export default GraphInput;
