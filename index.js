const LinkedList = require('./linked_list');
const LinkedNode = require('./linked_node');

let p = new LinkedList(new LinkedNode(10, null));

p.pop();
console.log(p.toString());
p.prepend(13);
p.prepend(18);
p.prepend(29);
console.log(p.contains(132))
p.prepend(5);
p.prepend(2);

console.log(p.toString());
p.pop();
console.log(p.toString());
console.log(p.find(10));
console.log(p.head)
console.log(p.tail)
console.log(p.size)
p.append(101);

console.log(p.toString());
console.log(p.at(3))

