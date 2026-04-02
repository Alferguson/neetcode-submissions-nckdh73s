/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        if (pairs.length === 0) return pairs;
        const answer = [[...pairs]];

        for (const [i, _keyVal] of pairs.entries()) {
            if (i === 0) continue;

            let j = i - 1;

            while (j >= 0 && pairs[j + 1].key < pairs[j].key) {
                const temp = pairs[j + 1];
                pairs[j + 1] = pairs[j];
                pairs[j] = temp;
                j--;
            }

            answer.push([...pairs]);
        }

        return answer;
    }
}
