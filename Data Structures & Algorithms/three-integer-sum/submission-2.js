class Solution {
  threeSum(nums) {
    nums.sort((a, b) => a - b);
    const res = [];

    let i = 0;

    while (i < nums.length) {
        let leftIndex = i + 1;
        let rightIndex = nums.length - 1;

        while (leftIndex < rightIndex) {
            const sum = nums[i] + nums[leftIndex] + nums[rightIndex];
            if (sum === 0) {
                res.push([nums[i], nums[leftIndex], nums[rightIndex]]);
                while (nums[leftIndex] === nums[leftIndex + 1]) {
                    leftIndex++;
                }
                leftIndex++;
                while (nums[rightIndex] === nums[rightIndex - 1]) {
                    rightIndex--;
                }
                rightIndex--;
            }
            else if (sum > 0) {
                rightIndex--;
            }
            else if (sum < 0) {
                leftIndex++;
            }
            else {
                console.error("wtf");
            }
        }
        while (nums[i] === nums[i + 1]) {
            i++;
        }
        i++;
    }

    return res;
  }
}
