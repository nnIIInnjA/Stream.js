import FromArray    from './source/FromArray.js';
import FromEvent    from './source/FromDOMEvent.js';
import FromPromise  from './source/FromPromise.js';
import FromInterval from './source/FromInterval.js';
import FromRange    from './source/FromRange.js';

import filter       from './operators/filter.js';
import map          from './operators/map.js';
import startsWith   from './operators/startsWith.js';
import zip          from './operators/zip.js';
import scan         from './operators/scan.js';
import merge        from './operators/merge.js';
import takeLatest   from './operators/takeLatest.js';
import { compose }  from './utils.js';


const Stream = {
    FromArray,
    FromEvent,
    FromPromise,
    FromInterval,
    FromRange,
    filter,
    map,
    startsWith,
    zip,
    scan,
    takeLatest,
    merge,
    compose
};

window.S = Stream;