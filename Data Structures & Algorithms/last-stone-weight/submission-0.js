/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const stoneMaxHeap = new MaxPriorityQueue();

        for (const stone of stones) {
            stoneMaxHeap.enqueue(stone);
        }

        while (stoneMaxHeap.size() > 1) {
            const largestStone = stoneMaxHeap.dequeue();
            const secondLargestStone = stoneMaxHeap.dequeue();

            const leftover = largestStone - secondLargestStone;

            if (leftover > 0) {
                stoneMaxHeap.enqueue(leftover);
            }
        }

        return stoneMaxHeap.front() ?? 0;
    }
}
