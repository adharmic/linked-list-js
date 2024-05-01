const LinkedNode = require('./linked_node');

module.exports = class LinkedList {
    constructor(head) {
        this._head = head;
        
        head === null ? this._size = 0 : this._size = 1;
    }

    get size() {
        return this._size;
    }

    set size(newSize) {
        this._size = newSize;
    }

    get head() {
        return this._head;
    }

    set head(newHead) {
        this._head = newHead;
    }

    // at(index) {
    //     if (index >= this.size) {
    //         // Out of bounds
    //         // TODO: throw exception
    //         return null;
    //     }
        
    //     let counter = 0;
    //     let currNode = this.head;
    //     while (counter < index) {
    //         currNode = currNode.nextNode;
    //         counter++;
    //     }
    //     return currNode;

    // }

    get tail() {
        return this.at(this.size - 1);
    }

    append(valueToAppend) {
        let nodeToAppend = new LinkedNode(valueToAppend, null)
        if (this.size === 0) {
            this.head = nodeToAppend;
        }
        else {
            this.tail.nextNode = nodeToAppend;
        }
        this.size++;
    }

    prepend(valueToPrepend) {
        let nodeToPrepend = new LinkedNode(valueToPrepend, null);
        if (this.size === 0) {
            this.head = nodeToPrepend;
        }
        else {
            nodeToPrepend.nextNode = this.head;
            this.head = nodeToPrepend;
        }
        this.size++;
    }

    pop() {
        if (this.size <= 1) {
            this.head = null;
            this.size = 0;
            return;
        }
        this.at(this.size - 2).nextNode = null;
        this.size--;
    }

    traverse(callback, handler) {
        let counter = 0;
        let currNode = this.head;
        while (counter < this.size && currNode !== null) {
            let result = callback(currNode, counter);
            if (result !== null) {
                return result;
            }
            currNode = currNode.nextNode;
            counter++;
        }
        return null;
    }

    accumulate(aggr, callback) {
        let counter = 0;
        let currNode = this.head;
        while (counter < this.size && currNode !== null) {
            aggr += callback(currNode, counter);
            currNode = currNode.nextNode;
            counter++;
        }
        return aggr;
    }

    find(value) {
        return this.traverse((node, index) => {
            if (node?.value == value) {
                return index;
            }
            return null;
        })
    }

    at(index) {
        return this.traverse((node, counter) => {
            if (index == counter) {
                return node;
            }
            return null;
        })
    }

    contains(value) {
        return this.find(value) !== null;
    }

    toString() {
        let acc = "";
        if (this.size == 0) {
            return "null";
        }
        return this.accumulate(acc, (node, counter) => {
            return node?.toString();
        })
    }

}