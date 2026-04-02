class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const numOfRows = grid.length;
        const numOfColumns = grid[0].length;

        const _dfs = (rowIndex, columnIndex, visited = new Map()) => {
            const rc = `${rowIndex}-${columnIndex}`;

            if (
                rowIndex >= numOfRows 
                || columnIndex >= numOfColumns
                || rowIndex < 0 
                || columnIndex < 0
                || grid[rowIndex][columnIndex] === 1
                || visited.has(rc)
                ) {
                return 0;
            } 
            if (rowIndex === (numOfRows - 1) && columnIndex === (numOfColumns - 1)) {
                return 1;
            }

            visited.set(rc, true);

            let count = 0;

            count += _dfs(rowIndex - 1, columnIndex, visited);
            count += _dfs(rowIndex, columnIndex - 1, visited);
            count += _dfs(rowIndex + 1, columnIndex, visited);
            count += _dfs(rowIndex, columnIndex + 1, visited);

            visited.delete(rc);

            return count;
        }

        return _dfs(0, 0);
    }
}
