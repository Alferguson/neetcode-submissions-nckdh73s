/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * Start at root, do dfs with queue where we enqueue LEFT first
     * Iterate over current queue length. Once reach end of queue length, set last node to null
     * Repeat until queue is empty
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
        if (!root) {
            return root;
        }
        const queue = [root];
        while (queue.length !== 0) {
            const curLength = queue.length;
            for (let i = 0; i < curLength; i++) {
                const curNode = queue.shift();
                if (i === (curLength - 1)) {
                    curNode.next = null;
                } else {
                    curNode.next = queue[0];
                }

                curNode.left && queue.push(curNode.left);
                curNode.right && queue.push(curNode.right);
            }
        }
        return root;
    }
}
