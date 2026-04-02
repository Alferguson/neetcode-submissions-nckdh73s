class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const numOfRows = grid.length; 
        const numOfColumns = grid[0].length; 

        if (grid[numOfRows - 1][numOfColumns - 1] === 1 || grid[0][0] === 1) {
            return -1;
        }

        const queue = [[0, 0]];
        const visited = new Map();
        let shortestPath = 0;

        while (queue.length > 0) {
            for (let _i = queue.length - 1; _i >= 0; _i--) {
                const [rowIndex, columnIndex] = queue.shift();
                const curNode = grid?.[rowIndex]?.[columnIndex];
                const rc = `${rowIndex}-${columnIndex}`;

                if (curNode == 0 && (rowIndex === numOfRows - 1) && (columnIndex === numOfColumns - 1)) {
                    return shortestPath + 1;
                }
                else if (
                curNode === 1
                || curNode == null
                || visited.has(rc)     
                ) {
                    visited.set(rc, true); // 1, 1
                }
                else if (curNode === 0) {
                    visited.set(rc, true); // 1, 1
                    queue.push([rowIndex - 1, columnIndex - 1]); // 0, 0
                    queue.push([rowIndex - 1, columnIndex]); // 0, 1
                    queue.push([rowIndex - 1, columnIndex + 1]); // 0, 2

                    queue.push([rowIndex + 1, columnIndex - 1]); // 2, 0
                    queue.push([rowIndex + 1, columnIndex + 1]); // 2, 2
                    queue.push([rowIndex + 1, columnIndex]); // 2, 1

                    queue.push([rowIndex, columnIndex - 1]); // 1, 0
                    queue.push([rowIndex, columnIndex + 1]); // 1, 2
                }
            }
            shortestPath++;
        }

        return -1; 
    }
}
