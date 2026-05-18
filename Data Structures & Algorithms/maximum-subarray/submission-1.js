class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let curSum = 0;
        let maxSum = -Infinity;
        let index = 0;

        while (index < nums.length) {
            // reset "window" since no point if current sum is negative
            if (curSum < 0) {
                curSum = 0;
            }

            curSum += nums[index];
            maxSum = Math.max(curSum, maxSum);
            index++;
        }

        return maxSum;
    }
}
