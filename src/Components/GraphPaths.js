import {modes} from "common/helpers";
import {isEmpty, toNumber,split} from 'lodash';
import React, {useState} from 'react';


function GraphPaths({paths, graphMode, setGraphMode, addNode}) {


  const [parentNode, setparentNode] = useState("");
  const [childrenNode, setchildrenNode] = useState([]);

  console.log("parent", parentNode, "child", childrenNode);

  function handleAddNode() {
    if (!isEmpty(parentNode) && !isEmpty(childrenNode)) {
      addNode(parentNode, childrenNode);
    } else {
      console.log("Error in values");
    }
  };

  const addChildren = (val) => {
    setchildrenNode(split(val,','))
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: 1, height: '100%'}}>
      <p style={{fontSize:18}}>{JSON.stringify(paths)}</p>

      <div>
        <input onChange={(e) => setparentNode(e.target.value)} placeholder={"Parent - p1"}/>
        <input onChange={(e) => addChildren(e.target.value) }
               placeholder={"Children - [n2,n3]"}/>
        <button onClick={handleAddNode}>ADD NODE</button>
      </div>

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
