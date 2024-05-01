module.exports = class LinkedNode {
    constructor(value, nextNode) {
        this._value = value;
        this._nextNode = nextNode;
    }

    get size() {
        return this._size;
    }

    get value() {
        return this._value;
    }

    get nextNode() {
        return this._nextNode;
    }

    set value(newValue) {
        this._value = newValue;
    }

    set nextNode(newNextNode) {
        this._nextNode = newNextNode;
    }

    toString() {
        let result = "( " + this._value + " ) -> ";
        if (this._nextNode === null) {
            result += "null";
        }
        return result;
    }
}