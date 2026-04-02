class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const curCombo = [];

        const _checkSum = (nums, target, index, curCombo) => { // [20,2,3] target = 3, index = 2 []
            if (index >= nums.length) {
                return;
            }

            const curSum = curCombo.reduce((a, b) => a + b, 0); // [], [2]

            if (curSum === target) {
                res.push([...curCombo]);
                return;
            }
            if (curSum > target) {
                return;
            }
                
            curCombo.push(nums[index]); // 20, 2, [2,2], [2,3], [3]
            _checkSum(nums, target, index, curCombo); // [20], [2], index 1, [2,2] index 1, [2,3] index 2
            curCombo.pop();
            _checkSum(nums, target, index + 1, curCombo); // [2,3] index 1, [2] index 2, [2] index 3
        }

        _checkSum(nums, target, 0, curCombo);

        return res;
    }
}
