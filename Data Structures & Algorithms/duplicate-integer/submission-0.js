class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasDup = false;
        const set = new Set();
        for (let num of nums) {
            if (set.has(num)) {
                hasDup = true;
                break;
            }
            set.add(num);
        }
        return hasDup;
    }
}
