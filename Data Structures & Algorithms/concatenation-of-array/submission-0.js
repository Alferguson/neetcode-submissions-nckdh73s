class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = Array(nums.length * 2).fill(0);

        for (const [i, _num] of ans.entries()) {
            ans[i] = nums[i] == null ? nums[i - nums.length] : nums[i];
        }

        return ans;
    }
}
