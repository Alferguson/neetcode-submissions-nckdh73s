class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const sortedNums = nums.toSorted((a, b) => a - b);
        let i = 0;
        let j = sortedNums.length - 1;
        const values = [];

        while (i < j) {
        console.log(i, j, sortedNums, values);

            if (sortedNums[i] + sortedNums[j] === target) {
                values.push(sortedNums[i]);
                values.push(sortedNums[j]);
                break;
            }
            else if ((sortedNums[i] + sortedNums[j]) > target) {
                j--;
            }
            else if ((sortedNums[i] + sortedNums[j]) < target) {
                i++;
            }
        }


        return [
            nums.findIndex(num => num === values[0]),
            nums.findLastIndex(num => num === values[1])
        ];
    }
}
