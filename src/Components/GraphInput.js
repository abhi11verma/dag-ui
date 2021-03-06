import {isEmpty} from 'lodash';
import React, {useState} from 'react';


function GraphInput({value, startNode, setStartNode, getPath, editGraph, serverGraphData, createGraph, getGraph}) {

  const [jsonError, setJsonError] = useState("");
  const [parsedJson, setParsedJson] = useState([]);
  const [textValue, setTextValue] = useState([]);

  const handleClick = () => {
    getPath(startNode);
  };

  const setTextField = (val) => {
    setTextValue(val);
    parseJSON(val);
  };

  const parseJSON = (value) => {
    try {
      let parsedValue = JSON.parse(value);
      setParsedJson(parsedValue);
      editGraph(parsedValue);
      setJsonError("");
    } catch (e) {
      setJsonError("Error in format", e);
    }
  };

  const submitGraph = () => {
    !isEmpty(parsedJson) && createGraph(parsedJson);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: 1, height: '100%'}}>
      <div style={{display: 'flex', flexDirection: 'row',flex:1}}>
        <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
          <label>Enter graph</label>
          <textarea
            style={{width: '100%', height: '60%', fontSize: 16,flex:1}}
            onChange={(e) => setTextField(e.target.value)}
            value={textValue}
          />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
          <label>Graph Format <span style={{color: 'red'}}>{jsonError}</span></label>
          <textarea
            style={{width: '100%', height: '60%', fontSize: 16,flex:1}}
            disabled={true}
            value={JSON.stringify(parsedJson)}
          />
        </div>
      </div>
      <button
        style={{
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: "#4970ff",
          fontWeight: 'bold',
          marginTop:'auto'
        }}
        onClick={submitGraph}
      >POST GRAPH
      </button>
      GRAPH DATA ON SERVER :
      <textarea
        style={{width: '100%', fontSize: 16}}
        disabled={true}
        value={JSON.stringify(serverGraphData)}
      />
      <div>
        <label>Specify Start Node </label>
        <input value={startNode} onChange={(e) => setStartNode(e.target.value)}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'row',marginTop:'auto'}}>
        <div style={{
          backgroundColor: "#f44336",
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: "#ffffff",
          fontWeight: 'bold',
          flex: 1
        }}
             onClick={() => handleClick()}
        >GET PATHS
        </div>
        <div style={{
          backgroundColor: "#f4a231",
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: "#ffffff",
          fontWeight: 'bold',
          flex: 1
        }}
             onClick={getGraph}
        >GET GRAPH
        </div>
      </div>
    </div>
  );
}

export default GraphInput;
