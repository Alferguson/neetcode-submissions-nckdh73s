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
    rightSideView(root) {
        const rightView = [];
        const queue = [];

        if (root == null) {
            return rightView;
        }

        queue.push(root);

        let curNode = root;

        while (queue.length > 0) {
            for (let i = queue.length; i > 0; i--) {
                curNode = queue.shift();

                if (curNode.left != null) queue.push(curNode.left);
                if (curNode.right != null) queue.push(curNode.right);
            }
            rightView.push(curNode.val);
        }

        return rightView;
    }
}
