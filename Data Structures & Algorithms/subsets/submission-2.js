class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) { // [1,2,3,4]
        const res = [];
        const subset = [];

        const _subsets = (nums, index, subset, res) => {
            if (index >= nums.length) {
                res.push([...subset]); 
                return;
            }
            subset.push(nums[index]); 
            _subsets(nums, index + 1, subset, res);
            subset.pop();
            _subsets(nums, index + 1, subset, res); 
        }

        _subsets(nums, 0, subset, res)

        return res;
    }
}
