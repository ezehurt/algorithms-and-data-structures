// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(data) {
        this.head = new Node(data, this.head)
    }
    size() {
        let size = 0;
        let nextNode = this.head;
        while (nextNode) {
            size = size + 1;
            nextNode = nextNode.next;
        }
        return size;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let lastNode;
        let nextNode = this.head;
        while (nextNode) {
            lastNode = nextNode;
            nextNode = nextNode.next;
        }
        return lastNode;
    }
    clear() {
        this.head = null;
    }
    insertLast(data) {
        let lastNode;
        let nextNode = this.head;
        if (!nextNode) {
            this.head = new Node(data)
        } else {
            while (nextNode) {
                lastNode = nextNode;
                nextNode = nextNode.next;
            }
            lastNode.next = new Node(data);
        }

    }
    getAt(index) {
        let indexCounter = 0;
        let node = this.head;
        while (node && indexCounter !== index) {
            indexCounter++;
            node = node.next;
        }
        return node;
    }
    removeAt(index) {
        const nodeToRemove = this.getAt(index);
        if (index === 0 && nodeToRemove) {
            this.head = nodeToRemove.next;
        } else if (this.getAt(index - 1) && this.getAt(index + 1)) {
            this.getAt(index - 1).next = this.getAt(index + 1);
        } else if (index === this.size() - 1) {
            let lastNode = this.getAt(index - 1);
            lastNode.next = null;
        }
    }
    removeFirst() {
        let node = this.head;
        if (node) {
            this.head = node.next;
        }
    }
    removeLast() {
        const size = this.size();
        if (size === 1) {
            this.head = null;
        } else {
            let node = this.getAt(size - 2);
            if (node) {
                node.next = null;
            }
        }

    }
    insertAt(data,index){
        const node = this.getAt(index);
        const size = this.size();
        if(index === 0 && !node){
            this.head = new Node(data);
        }
        else if (index === 0 && node) {
            this.insertFirst(data);
        } else if (index > 0 && index < size) {
            const previousNode = this.getAt(index-1);
            const indexNode = this.getAt(index);
            previousNode.next = new Node(data, indexNode);
        } else if (index >= size) {
          const lastNode = this.getLast();
          lastNode.next = new Node(data)
        }
    }
    forEach(fn){
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter ++;
        }
    }
    *[Symbol.iterator]() { 
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
