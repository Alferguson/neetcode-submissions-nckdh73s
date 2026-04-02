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
    //    1
    //   1 0
    //  1
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        let tally = 0;
        
        const _hasPathSum = (root, targetSum) => {
            if (root == null) {
                return false;
            }

            tally += root.val;

            // at leaf Node
            if (root.left == null && root.right == null) {
                if (tally === targetSum) {
                    return true;
                }
                tally -= root.val;
                return false;
            }
            if (_hasPathSum(root.left, targetSum)) {
                return true;
            };
            if (_hasPathSum(root.right, targetSum)) {
                return true;
            };

            tally -= root.val;
            return false;
        }

        return _hasPathSum(root, targetSum);
    }
}
