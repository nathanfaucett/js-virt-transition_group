var virt = require("virt");


var View = virt.View,
    owner = virt.owner,
    context = virt.context;


module.exports = createTransitionChild;


function createTransitionChild(child, key, ref) {
    return new View(child.type, key, ref, child.props, child.children, owner.current, context.current);
}
