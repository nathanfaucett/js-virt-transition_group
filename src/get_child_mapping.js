var virt = require("virt");


var isPrimativeView = virt.View.isPrimativeView;


module.exports = getChildMapping;


function getChildMapping(children) {
    var childMapping = null,
        i = -1,
        il = children.length - 1,
        child;

    while (i++ < il) {
        child = children[i];

        if (!isPrimativeView(child)) {
            childMapping = childMapping || {};
            childMapping[child.key] = child;
        }
    }

    return childMapping;
}
