class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let leftIndex = 0;
        let rightIndex = nums.length - 1;

        while (leftIndex <= rightIndex ) { 
            const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
            console.log(leftIndex, rightIndex,middleIndex);

            if (target === nums[middleIndex]) {
                return middleIndex;
            }
            else if (target < nums[middleIndex]) { 
                rightIndex = middleIndex - 1; 
            }
            else if (target > nums[middleIndex]) {
                leftIndex = middleIndex + 1; 
            }
        }

        return -1;
    }
}
