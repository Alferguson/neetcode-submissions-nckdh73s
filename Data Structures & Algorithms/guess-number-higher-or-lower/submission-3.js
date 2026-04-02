/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) { // n = 20 pick = 3
        let lower = 1;
        let upper = n; 

        while ((upper - lower) > 1) { // 0 20 - 0 10 - 0 5 - 1 5
            let guessNumber = Math.floor((lower + upper) / 2); // 10 - 5 - 2 - 3
            switch (guess(guessNumber)) {
                case 0: 
                    return guessNumber;
                case -1: // guess is higher than the number I picked 
                    upper = Math.floor((lower + upper) / 2); // 10 - 5
                    break;
                case 1:
                    lower = Math.floor((lower + upper) / 2); // 1
                    break;
                default:
                    return n;
            }
        }

        if (guess(lower) === 0) {
            return lower;
        }
        if (guess(upper) === 0) {
            return upper;
        }
        return false; 
    }
}
