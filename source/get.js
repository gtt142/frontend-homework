'use strict';

function get(object, path) {
    if (!path) {
        return undefined;
    }
    const pathElems = path.split('.').slice(1);
    if (pathElems[0]) {
        for (let i = 0; i < pathElems.length; i++) {
            if (object.hasOwnProperty(pathElems[i])) {
                object = object[pathElems[i]];
            } else {
                return undefined;
            }
        }
    }
    return object;
}