/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new MaxPriorityQueue();
        for (const num of nums) {
            maxHeap.enqueue(num);
        }

        let res = null;

        while (k > 0) {
            res = maxHeap.dequeue();
            k--;
        }

        return res;
    }
}
