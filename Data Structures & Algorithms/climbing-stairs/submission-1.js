class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let first = 1;
        let second = 1;
        let answer;

        while (n > 0) {
            answer = first;
            first = first + second;
            second = answer
            n--;
        }

        return answer;
    }
}
