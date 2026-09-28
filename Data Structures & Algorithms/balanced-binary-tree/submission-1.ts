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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
       const height = (node: TreeNode | null): number => {
        if (!node) return 0;
        const l = height(node.left);
        if (l === -1) return -1;
        const r = height(node.right);
        if (r === -1) return -1;
        if (Math.abs(l - r) > 1) return -1;
        return 1 + Math.max(l, r);
    };
    return height(root) !== -1;
    }
}
