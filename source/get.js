'use strict';

function get(object, path) {
    var temp = object;
    var pathElems = path.split('.').slice(1);
    if (pathElems[0]) {
        for (var i = 0; i < pathElems.length; i++) {
            temp = temp[pathElems[i]];
            if (!temp){
                return temp;
            }
        }
    }
    return temp;
}