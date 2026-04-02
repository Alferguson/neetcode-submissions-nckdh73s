class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const numOfColors = [0,0,0];

        for (const num of nums) {
            numOfColors[num] = numOfColors[num] + 1;
        }

        let numOfColorsIndex = 0;

        // [2] - [0,0,1]
        nums.forEach((_num, i, arr) => {
            while (numOfColors[numOfColorsIndex] === 0 && numOfColorsIndex < 3) {
                numOfColorsIndex++;
            }

            arr[i] = numOfColorsIndex;
            numOfColors[numOfColorsIndex] = numOfColors[numOfColorsIndex] - 1;
        });

        return nums;
    }
}
