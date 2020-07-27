import {assign, flattenDeep, forEach, join, map, union} from 'lodash';

function graphFormator(graph) {
  const nodes = [];
  const nodesData = [];
  //create all nodes
  forEach(graph, (element, key) => nodes.push(...element, key));

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
