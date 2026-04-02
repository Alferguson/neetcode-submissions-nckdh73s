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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];
        if (root == null) {
            return res;
        }

        // [1,2,3,4,5,6,7]
        const queue = [];
        queue.push(root);
        let level = 0;

        while (queue.length > 0) { 
            for (let i = queue.length; i > 0; i--) { 
                const curNode = queue.shift(); 
                if (Array.isArray(res[level])) {
                    res[level].push(curNode.val);
                }
                else {
                    res[level] = [curNode.val];
                }

                if (curNode.left) queue.push(curNode.left); 
                if (curNode.right) queue.push(curNode.right); 
            }
            level++;
        }

        return res;
    }
}
