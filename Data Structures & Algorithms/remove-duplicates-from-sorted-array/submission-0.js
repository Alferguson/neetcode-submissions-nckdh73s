class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k = 0;

        for (const [i, _num] of nums.entries()) {
            if (nums[i] < nums[i + 1] || i === (nums.length - 1)) {
                k++;
            }
            // swap
            else if (nums[i] >= nums[i + 1]) {
                let leftSwapIndex = i + 1;
                let rightSwapIndex = i + 2;
                while (nums[i] >= nums[rightSwapIndex]) {
                    rightSwapIndex++;
                }
                if (rightSwapIndex === nums.length) {
                    k++;
                    break;
                }
                else {
                    nums[leftSwapIndex] = nums[rightSwapIndex];
                    k++;
                }
            }
            // at end of array
        };

        return k;
    }
    
}
