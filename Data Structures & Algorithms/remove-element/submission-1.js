class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;
        for (const [i, num] of nums.entries()) {
            if (nums[i] !== val) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;
    }
}
