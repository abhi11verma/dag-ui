import request from "api/request";

export const fetchGraph = () => request({
  url: `api/getgraph`,
  method: 'GET',
});

export const fetchPaths = ({startNode}) => request({
  url: `api/getpaths?startnode=${startNode}`,
  method: 'GET',
});

export const postGraph = (graphData) => request({
  url: `api/create`,
  method: 'POST',
  data:{
    ...graphData
  }
});

export const postNode = ({parent, numericValueArray}) => request({
  url: `api/addnode`,
  method: 'POST',
  data:{
    parent:parent,
    value: numericValueArray,
  }
});
