class Solution {
    /**
     * Iterate over nums
     * Keep track of current sum and max sum
     * Set both to 0
     * set current sum to += cur val
     * set max sum to current sum if greater
     * if current sum < 0 set left pointer to current index (reset sliding window)
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let curSum = 0;

        for (const num of nums) {
            if (curSum < 0) {
                curSum = 0;
            }

            curSum += num;
            maxSum = Math.max(maxSum, curSum);
        }


        return maxSum;
    }
}
