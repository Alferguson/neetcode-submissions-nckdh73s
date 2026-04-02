class MinHeap {
    constructor() {
        this.heap = [null];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.heap.push(val);

        this.#percolateUp(this.heap.length - 1);
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.heap.length === 1) {
            return -1;
        }
        const minVal = this.heap[1]; 
        if (this.heap.length === 2) {
            this.heap.pop();
            return minVal;
        }
        this.heap[1] = this.heap.pop();

        this.#percolateDown(1);

        return minVal;
    }

    /**
     * @return {number}
     */
    top() {
        return this.heap[1] ?? -1;
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.heap = [null, ...nums];
        for (let i = Math.floor(nums.length / 2); i > 0; i--) {
            this.#percolateDown(i);
        }
    }

    #percolateUp(i) {
        while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
            [this.heap[i], this.heap[Math.floor(i / 2)]] = [this.heap[Math.floor(i / 2)], this.heap[i]];
            i = Math.floor(i / 2);
        }
    }

    // bubble down
    #percolateDown(i) {
        while (2 * i < this.heap.length) {
            const leftIdx = 2 * i;
            const rightIdx = 2 * i + 1;
            let smallestIdx = leftIdx;
            
            if (rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[leftIdx]) {
                smallestIdx = rightIdx;
            }

            if (this.heap[i] <= this.heap[smallestIdx]) {
                break;
            }

            [this.heap[i], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[i]];
            i = smallestIdx;
        }
    }
}