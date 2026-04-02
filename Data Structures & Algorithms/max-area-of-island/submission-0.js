class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;

        const existingIslands = new Map();

        const numOfRows = grid.length;
        const numOfColumns = grid[0].length;
        let rowIndex = 0;

        while (rowIndex < numOfRows) {
            for (let columnIndex = 0; columnIndex < numOfColumns; columnIndex++) {
                let curMaxArea = this.#searchAndSetArea(grid, rowIndex, columnIndex, existingIslands);

                maxArea = maxArea > curMaxArea ? maxArea : curMaxArea;
            }
            rowIndex++;
        }

        return maxArea;
    }

    #searchAndSetArea(grid, rowIndex, columnIndex, existingIslands) { 
        const curPoint = grid?.[rowIndex]?.[columnIndex];
        const rc = `${rowIndex}-${columnIndex}`;
        let _curMaxArea = 0;

        if (!existingIslands.has(rc) && curPoint === 1) {
            existingIslands.set(`${rowIndex}-${columnIndex}`, true);
            _curMaxArea++;
            _curMaxArea += this.#searchAndSetArea(grid, rowIndex + 1, columnIndex, existingIslands);
            _curMaxArea += this.#searchAndSetArea(grid, rowIndex - 1, columnIndex, existingIslands);
            _curMaxArea += this.#searchAndSetArea(grid, rowIndex, columnIndex + 1, existingIslands);
            _curMaxArea += this.#searchAndSetArea(grid, rowIndex, columnIndex - 1, existingIslands);
        }
        return _curMaxArea;
    }
}
