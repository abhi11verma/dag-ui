import {assign, flattenDeep, forEach, isEmpty, join, map, union} from 'lodash';

function graphFormator(graph) {

  if (typeof graph !=='object' || graph.length<1) {
    return [];
  }

  const nodes = [];
  const nodesData = [];
  //create all nodes
  try {
    forEach(graph, (element, key) => nodes.push(...element, key));
  }catch (e) {
    return [];
  }
  const uniqueNodes = union(nodes);
  forEach(uniqueNodes, (node) => {
    nodesData.push(nodeFormat(node));
  });
  //create all edges

  forEach(graph,(elements,key)=>{
    forEach(elements,element=>{
      nodesData.push(edgeFormat(key,element))
    })
  });

  //return combined data
  return nodesData;
}

// TODO - single path return disjion node

function pathFormator(paths) {
  const nodes = union(flattenDeep(paths));
  const nodesData = [];
  //getUnique nodes
  forEach(nodes, node => {
    nodesData.push(nodeFormat(node));
  });

  forEach(paths, pathSet => {
    if (pathSet.length > 1) {
      for (let i = 0; i < pathSet.length - 1; i++) {
        nodesData.push(edgeFormat(pathSet[i], pathSet[i + 1]));
      }
    }
  });

  return nodesData;
}

const nodeFormat = (node) => {
  return assign({}, {data: {id: node.toString()}});
};

const edgeFormat = (source, target) => {
  return assign({}, {
    data: {
      id: source.toString() + target.toString(),
      source: source.toString(),
      target: target.toString()
    }
  });
};


export {graphFormator, pathFormator};
