// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.queue = []
    }
    add(element) {
        this.queue.unshift(element);
    }
    remove() {
        const lastElement = this.queue[this.queue.length -1];
        if(lastElement){
            this.queue.pop();
            return lastElement;
        } else {
            return undefined;
        }
    }
}

module.exports = Queue;


// EJHF Solution 1
// class Queue {
//     constructor() {
//         this.queue = []
//     }
//     add(element) {
//         this.queue.unshift(element);
//     }
//     remove() {
//         const lastElement = this.queue[this.queue.length -1];
//         if(lastElement){
//             this.queue.pop();
//             return lastElement;
//         } else {
//             return undefined;
//         }
//     }
// }
