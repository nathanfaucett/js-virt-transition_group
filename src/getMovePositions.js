var has = require("has"),
    isNullOrUndefined = require("is_null_or_undefined");


module.exports = getMovePositions;


function getMovePositions(currentKeyPositions, nextChildMapping, keysToMoveUp, keysToMoveDown) {
    var localHas = has,
        index = 0,
        key, prev;

    for (key in nextChildMapping) {
        if (localHas(nextChildMapping, key)) {
            prev = currentKeyPositions[key];

            if (!isNullOrUndefined(prev)) {
                if (prev > index) {
                    keysToMoveDown[keysToMoveDown.length] = key;
                } else if (prev < index) {
                    keysToMoveUp[keysToMoveUp.length] = key;
                }
            }

            currentKeyPositions[key] = index++;
        }
    }
}
