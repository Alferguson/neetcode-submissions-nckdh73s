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
    findMinNode(root) {
        if (root.left == null) {
            return root;
        }
        return this.findMinNode(root.left);
    }
    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (root == null) {
            return null;
        }
        if (key === root.val) {
            if (root.right == null) {
                return root.left;
            }
            else if (root.left == null) {
                return root.right;
            }
            // if node has 2 children
            else {
                const minNode = this.findMinNode(root.right);
                root.val = minNode.val;
                root.right = this.deleteNode(root.right, minNode.val);
            }
        }

        if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        }

        if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        }

        return root;
    }
}
