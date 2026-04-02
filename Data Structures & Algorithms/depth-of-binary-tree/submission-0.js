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
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0;
        let res = 1;
        
        let leftRes = this.maxDepth(root.left);
        let rightRes = this.maxDepth(root.right);

        return res + Math.max(leftRes, rightRes);
    }
}
