class Solution {
    /**
     * Iterate over grid
     * If 1, start dfs
     * At each node, do bfs on neighbors. If neighbor is 0 or outside, +1 to result
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let perimeter = 0;
        let memo = new Map();
        for (const [rowIndex, row] of grid.entries()) {
            for (const [colIndex, value] of row.entries()) {
                if (value === 1) {
                    perimeter += this.#dfs(rowIndex, colIndex, grid, memo);

                }
            }
        }
        return perimeter;
    }

    #dfs(rowIndex, colIndex, grid, memo) {
        let result = 0;
        const node = grid?.[rowIndex]?.[colIndex];
        if (node === 0 || node == null) {
            return 1;
        }
        const rc = `${rowIndex}-${colIndex}`;
        if (memo.has(rc)) {
            return 0;
        }
        memo.set(rc, true);
        result += this.#dfs(rowIndex - 1, colIndex, grid, memo);
        result += this.#dfs(rowIndex, colIndex - 1, grid, memo);
        result += this.#dfs(rowIndex + 1, colIndex, grid, memo);
        result += this.#dfs(rowIndex, colIndex + 1, grid, memo);
        
        return result;
    }
}
