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
    isBalanced(root) {
        const dfs = (node) => {
            if (!node) return 0; // height of empty tree

            const left = dfs(node.left);
            if (left === -1) return -1; // left subtree unbalanced

            const right = dfs(node.right);
            if (right === -1) return -1; // right subtree unbalanced

            if (Math.abs(left - right) > 1) return -1; // current node unbalanced

            return Math.max(left, right) + 1; // return height
        };

        return dfs(root) !== -1;
    }
}
