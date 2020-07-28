import {isNull, omitBy} from 'lodash';


export const omitNulls = d => omitBy(d, isNull);

export const modes = {
  GRAPH: "graph",
  PATH: "path"
};
