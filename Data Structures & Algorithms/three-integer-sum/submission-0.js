class Solution {
  threeSum(nums) {
    nums.sort((a, b) => a - b);

    const freq = new Map();
    for (const n of nums) {
      freq.set(n, (freq.get(n) ?? 0) + 1);
    }

    const res = [];

    for (let i = 0; i < nums.length; i++) {
      const a = nums[i];
      freq.set(a, freq.get(a) - 1);

      if (i > 0 && nums[i] === nums[i - 1]) continue;

      for (let j = i + 1; j < nums.length; j++) {
        const b = nums[j];
        freq.set(b, freq.get(b) - 1);

        if (j > i + 1 && nums[j] === nums[j - 1]) continue;

        const c = -(a + b);

        if (freq.get(c) > 0) {
          res.push([a, b, c]);
        }
      }

      // restore counts for j loop
      for (let j = i + 1; j < nums.length; j++) {
        freq.set(nums[j], freq.get(nums[j]) + 1);
      }
    }

    return res;
  }
}
