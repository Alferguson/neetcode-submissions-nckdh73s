/**
 * Iterate over list
 * 
 * 
 * getArea = (shortestHeight, range) => {
 * return shortestHeight * range
 * range is number of bars from left to right including the right most bar
 * }
 */

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let leftIndex = 0;
        let rightIndex = heights.length - 1;
        let res = 0;

        while (leftIndex < rightIndex) {
            const leftHeight = heights[leftIndex];
            const rightHeight = heights[rightIndex];
            const isLeftHeightShorter = leftHeight < rightHeight;
            const shortestHeight = isLeftHeightShorter ? leftHeight : rightHeight;
            
            const width = rightIndex - leftIndex;

            const currentArea = shortestHeight * width;

            res = currentArea > res ? currentArea : res;
            if (isLeftHeightShorter) {
                leftIndex++;
            }
            else {
                rightIndex--;
            }
        }
        return res;
    }
}
