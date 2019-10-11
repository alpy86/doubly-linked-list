const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        //console.log(node);
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            //console.log(this._tail);
            node.prev = this._tail;
            //console.log(this._tail);
            this._tail = node;
            //console.log(this._tail);
            //console.log(node);
        }
        this.length++;
        //console.log(this._tail);
        //console.log(this._head);
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var currentNode = this._head;
        //console.log(currentNode);
        var counter = 0;
        if (index === 0) {
            return this._head.data;
        } else {
            while (counter < index) {
                currentNode = currentNode.next;
                counter++;
            }
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        var node = new Node(data);
        var currentNode = this._head;
        var counter = 0;
        if (index === 0) {
            this._head.prev = node;
            node.next = this._head;
            this._head = node;
        } else {
            while (counter < index) {
                currentNode = currentNode.next;
                counter++;
            }
            node.next = currentNode;
            node.prev = currentNode.prev;
            //console.log("currentNode.prev ", currentNode.prev);
            currentNode.prev.next = node;
            currentNode.prev = node;
        }
        this.length++;
        return this;

    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._head.data = null;
        this._tail.data = null;
        return this;
    }

    deleteAt(index) {
        var currentNode = this._head;
        var counter = 0;
        if (this.length === 1) {
            this.clear();
            return this;
        }
        if (index === 0) {
            this._head = currentNode.next;
            this._head.prev = null;
            currentNode = null;

        } else {
            while (counter < index) {
                currentNode = currentNode.next;
                counter++;
            }
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
            currentNode = null;
        }
        this.length--;
        return this;

    }

    reverse() {
        var currentNode = this._tail;
        for (var i = 0; i < this.length; i++) {
            var prevElement = currentNode.prev;
            var nextElement = currentNode.next;
            currentNode.next = prevElement;
            currentNode.prev = nextElement;
            currentNode = prevElement;
        }
        var head = this._head;
        var tail = this._tail;
        this._tail = head;
        this._head = tail;
        return this;
    }

    indexOf(data) {
        var currentNode = this._head;
        var counter = 0;
        for (var i = 0; i < this.length; i++) {
            if (data === currentNode.data) {
                return counter;
            } else {
                currentNode = currentNode.next;
                counter++;
            }
        }
        return -1;
    }
}


module.exports = LinkedList;
