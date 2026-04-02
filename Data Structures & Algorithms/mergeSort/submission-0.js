/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        const merge = (leftArr, rightArr) => {
            let answer = [];
            let i = 0, j = 0;

            while (i < leftArr.length && j < rightArr.length) {
                if (leftArr[i].key <= rightArr[j].key) {
                    answer.push(leftArr[i]);
                    i++;
                }
                else {
                    answer.push(rightArr[j]);
                    j++;
                }
            }
            if (i < leftArr.length) {
                answer = answer.concat(leftArr.slice(i));
            }

            if (j < rightArr.length) {
                answer = answer.concat(rightArr.slice(j));
            }

            return answer;
        }

        const _mergeSort = (arr) => {
            // if length of arr is 1, it is already sorted
            if (arr.length <= 1) {
                return arr;
            }

            const middleIndex = Math.floor(arr.length / 2);

            const leftArr = _mergeSort(arr.slice(0, middleIndex));
            const rightArr = _mergeSort(arr.slice(middleIndex));
            return merge(leftArr, rightArr);
        };

        return _mergeSort(pairs);

    }
}
