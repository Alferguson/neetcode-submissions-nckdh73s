class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) { // 15
        const _bsOnGivenRow = (row, startingIndex, endingIndex) => { // 0 ,3
            if (startingIndex > endingIndex) {
                return false;
            }

            const middleColumnIndex = Math.floor((startingIndex + endingIndex) / 2);
            const middleColumnVal = row[middleColumnIndex];
            // Target exists in given column
            if (target === middleColumnVal) {
                return true;
            }
            else if (target > middleColumnVal) {
                return _bsOnGivenRow(row, middleColumnIndex + 1, endingIndex); // 1, 0
            }
            else if (target < middleColumnVal) {
                return _bsOnGivenRow(row, startingIndex, middleColumnIndex - 1); // 0, 0
            }
            else {
                return false;
            }
        }

        const _bsOnMatrix = (matrix, startingIndex, endingIndex) => {
            if (startingIndex > endingIndex) {
                return false;
            }

            const middleRowIndex = Math.floor((startingIndex + endingIndex) / 2);
            const middleRow = matrix[middleRowIndex];
            const middleRowGreatestEl = middleRow[middleRow.length - 1];
            const middleRowLowestEl = middleRow[0];

            // Target exists in given row
            if (target <= middleRowGreatestEl && target >= middleRowLowestEl) {
                return _bsOnGivenRow(middleRow, 0, middleRow.length - 1);
            }
            else if (target > middleRowGreatestEl) {
                return _bsOnMatrix(matrix, middleRowIndex + 1, endingIndex);
            }
            else if (target < middleRowLowestEl) {
                return _bsOnMatrix(matrix, startingIndex, middleRowIndex - 1);
            }
            else {
                return false;
            }
        }

        return _bsOnMatrix(matrix, 0, matrix.length - 1);
    }
}
