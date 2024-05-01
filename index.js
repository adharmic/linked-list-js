const LinkedList = require('./linked_list');
const LinkedNode = require('./linked_node');

let p = new LinkedList(new LinkedNode(10, null));

p.pop();
console.log(p.toString());
p.prepend(13);
p.prepend(18);
p.prepend(29);
p.prepend(5);
p.prepend(2);
p.append(101);

console.log(p.toString());
p.insertAt(1337, 1);

console.log(p.toString());
console.log(p.at(3))

