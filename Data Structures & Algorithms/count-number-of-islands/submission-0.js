class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const existingIslands = new Map();
        let numOfIslands = 0;

        const numOfRows = grid.length;
        const numOfColumns = grid[0].length;
        let rowIndex = 0;

        while (rowIndex < numOfRows) {
            for (let columnIndex = 0; columnIndex < numOfColumns; columnIndex++) {
                const curPoint = grid[rowIndex][columnIndex];
                const rc = `${rowIndex}-${columnIndex}`;

                if (curPoint === "1" && !existingIslands.has(rc)) {
                    numOfIslands++;
                    existingIslands.set(rc, true);
                    this.#searchAndSetIslands(grid, rowIndex + 1, columnIndex, existingIslands);
                    this.#searchAndSetIslands(grid, rowIndex - 1, columnIndex, existingIslands);
                    this.#searchAndSetIslands(grid, rowIndex, columnIndex + 1, existingIslands);
                    this.#searchAndSetIslands(grid, rowIndex, columnIndex - 1, existingIslands);
                }
            }
            rowIndex++;
        }

        return numOfIslands;
    }

    #searchAndSetIslands(grid, rowIndex, columnIndex, existingIslands) { 
        const rc = `${rowIndex}-${columnIndex}`;

        if (!existingIslands.has(rc) && grid?.[rowIndex]?.[columnIndex] === "1") {
            existingIslands.set(`${rowIndex}-${columnIndex}`, true);
            this.#searchAndSetIslands(grid, rowIndex + 1, columnIndex, existingIslands);
            this.#searchAndSetIslands(grid, rowIndex - 1, columnIndex, existingIslands);
            this.#searchAndSetIslands(grid, rowIndex, columnIndex + 1, existingIslands);
            this.#searchAndSetIslands(grid, rowIndex, columnIndex - 1, existingIslands);
        }
        return;
    }
}
