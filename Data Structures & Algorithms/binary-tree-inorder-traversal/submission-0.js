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
     * @return {number[]}
     */
    inorderTraversal(root) {
        const _inorderTraversal = (curNode, arr) => {
            if (curNode == null) {
                return arr;
            }

            _inorderTraversal(curNode.left, arr);
            arr.push(curNode.val);
            _inorderTraversal(curNode.right, arr);

            return arr;
        }

        return _inorderTraversal(root, []);
    }
}
