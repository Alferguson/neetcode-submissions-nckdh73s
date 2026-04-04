class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let right = nums.length - 1;
        let left = 0;

        if (!nums || !nums.length) {
            return false;
        }
        if (nums.length === 1) {
            return nums[0];
        }

        while ( (right - left) > 1) {
            let midNumIndex = Math.floor( (right + left) / 2);
            const midNum = nums[midNumIndex];
            if (this.checkMin(midNumIndex, nums)) {
                return nums[midNumIndex];
            }

            if (nums[right] > nums[left]) {
                right = midNumIndex;
            }
            else {
                if (midNum < nums[right]) {
                    right = midNumIndex;
                }
                else if (midNum > nums[left]) {
                    left = midNumIndex;
                }
            }
        }

        return nums[right] < nums[left] ? nums[right] : nums[left];
    }

    checkMin(index, nums) {
        const indexBefore = index <= 0 ? nums.length - 1 : index - 1;

        if (nums[index] <= nums[indexBefore]) {
            return true;
        }
        return false;
    }
}
