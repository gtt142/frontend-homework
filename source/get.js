'use strict';

function get(object, path) {
    if (!path) {
        return undefined;
    }
    let temp = object;
    const pathElems = path.split('.').slice(1);
    if (pathElems[0]) {
        for (let i = 0; i < pathElems.length; i++) {
            if (temp.hasOwnProperty(pathElems[i])) {
                temp = temp[pathElems[i]];
            } else {
                return undefined;
            }
        }
    }
    return temp;
}