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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) { // [2,3,4]  [3,4]
        if (preorder.length === 0 || inorder.length === 0) {
            return null;
        }

        const root = new TreeNode(preorder[0]); // 
        const mid = inorder.findIndex(num => num === preorder[0]); // 1
        
        root.left = this.buildTree(preorder.slice(1), inorder.slice(0, mid));
        root.right = this.buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

        return root;
    }
}
