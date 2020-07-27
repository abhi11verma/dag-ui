import {isNull, omitBy} from 'lodash';


export const omitNulls = d => omitBy(d, isNull);

