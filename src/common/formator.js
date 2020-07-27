import {assign, forEach, join, map, union} from 'lodash';

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

export default graphFormator;
