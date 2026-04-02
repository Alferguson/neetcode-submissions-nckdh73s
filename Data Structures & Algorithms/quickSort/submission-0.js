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
     * Entry point for the QuickSort algorithm
     * @param {Pair[]} pairs Array of Pair objects to be sorted
     * @returns {Pair[]} Sorted array of Pair objects
     */
    quickSort(pairs) {
        this.quickSortHelper(pairs, 0, pairs.length - 1);
        return pairs;
    }

    /**
     * Helper function for the QuickSort algorithm
     * @param {Pair[]} arr Array of Pair objects to be sorted
     * @param {number} s Start index for the sorting
     * @param {number} e End index for the sorting
     */
    quickSortHelper(arr, s, e) {
        if (e - s + 1 <= 1) {
            return;
        }

        const pivot = arr[e]; // pivot is the last element
        let left = s; // pointer for left side

        // Partition: elements smaller than pivot on left side
        for (let i = s; i < e; i++) {
            if (arr[i].key < pivot.key) {
                const tmp = arr[left];
                arr[left] = arr[i];
                arr[i] = tmp;
                left++;
            }
        }

        // Move pivot in-between left & right sides
        arr[e] = arr[left];
        arr[left] = pivot;

        // Quick sort left side
        this.quickSortHelper(arr, s, left - 1);

        // Quick sort right side
        this.quickSortHelper(arr, left + 1, e);
    }
}
