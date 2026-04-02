/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const sortedNodes = [];
        const stack = [];
        let curNode = root;
        // nav to left-most leaf
        while (curNode || stack.length > 0) {
            while (curNode) {
                stack.push(curNode);
                curNode = curNode.left;
            }

            curNode = stack.pop();
            sortedNodes.push(curNode.val);
            curNode = curNode.right;
        }

        return sortedNodes[k - 1];
    }
}
