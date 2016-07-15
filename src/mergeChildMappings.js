var has = require("@nathanfaucett/has");


module.exports = mergeChildMappings;


function mergeChildMappings(prev, next) {
    var localHas = has,
        nextKeysPending = {},
        pendingKeys = [],
        childMapping = {},
        prevKey, nextKey, i, il, nextKeysPendingValue, pendingNextKey;

    prev = prev || {};
    next = next || {};

    for (prevKey in prev) {
        if (localHas(prev, prevKey)) {
            if (localHas(next, prevKey)) {
                if (pendingKeys.length) {
                    nextKeysPending[prevKey] = pendingKeys;
                    pendingKeys = [];
                }
            } else {
                pendingKeys[pendingKeys.length] = prevKey;
            }
        }
    }

    for (nextKey in next) {
        if (localHas(next, nextKey)) {
            if (localHas(nextKeysPending, nextKey)) {
                nextKeysPendingValue = nextKeysPending[nextKey];
                i = -1;
                il = nextKeysPendingValue.length - 1;

                while (i++ < il) {
                    pendingNextKey = nextKeysPendingValue[i];
                    childMapping[pendingNextKey] = localHas(next, pendingNextKey) ? next[pendingNextKey] : prev[pendingNextKey];
                }
            }
            childMapping[nextKey] = localHas(next, nextKey) ? next[nextKey] : prev[nextKey];
        }
    }

    i = -1;
    il = pendingKeys.length - 1;
    while (i++ < il) {
        nextKey = pendingKeys[i];
        childMapping[nextKey] = localHas(next, nextKey) ? next[nextKey] : prev[nextKey];
    }

    return childMapping;
}
