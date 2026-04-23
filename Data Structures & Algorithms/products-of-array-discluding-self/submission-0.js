class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = new Array(nums.length)
        const pref = new Array(nums.length);
        const suff = new Array(nums.length);

        pref[0] = 1;
        suff[nums.length - 1] = 1;
        for (let i = 1; i < nums.length; i++) {
            pref[i] = nums[i - 1] * pref[i - 1];
        }
        for (let i = nums.length - 2; i >= 0; i--) {
            suff[i] = nums[i + 1] * suff[i + 1];
        }
        for (let i = 0; i < nums.length; i++) {
            output[i] = pref[i] * suff[i];
        }
    
        return output;
    }
}
