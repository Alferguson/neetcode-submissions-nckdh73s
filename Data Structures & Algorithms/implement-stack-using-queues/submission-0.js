// class Queue {
//     constructor() {
//         this.queue = [];
//     }

//     enqueue(val) {
//         this.queue.push(val);
//     }

//     dequeue() {
//         return this.queue.shift();
//     }

//     peek() {
//         return this.queue[0];
//     }

//     size() {
//         return this.queue.length;
//     }

//     isEmpty() {
//         return this.queue.length === 0;
//     }
// }

class MyStack {
    constructor() {
        this.stack = new Queue();
        this.tail = null;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.enqueue(x);
        this.tail = x;
    }

    /**
     * @return {number}
     */
    pop() {
        const tempStack = new Queue();

        while (this.stack.size() > 1) {
            const curEl = this.stack.dequeue();
            tempStack.enqueue(curEl);
            this.tail = curEl;
        }
        const lastEl = this.stack.dequeue();
        this.stack = tempStack;

        return lastEl;
    }

    /**
     * @return {number}
     */
    top() {
        return this.tail;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.stack.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
