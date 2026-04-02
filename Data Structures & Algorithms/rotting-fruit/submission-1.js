class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        // Deep copy so original grid is untouched
        const copy = grid.map(row => [...row]);

        const queue = [];
        let fresh = 0;

        // Collect all rotten oranges first (multi-source BFS)
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (copy[r][c] === 2) queue.push([r, c]);
                if (copy[r][c] === 1) fresh++;
            }
        }

        if (fresh === 0) return 0;

        let minutes = -1;
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

        while (queue.length > 0) {
            const size = queue.length;
            minutes++;

            for (let i = 0; i < size; i++) {
                const [r, c] = queue.shift();

                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr >= 0 && nr < rows &&
                        nc >= 0 && nc < cols &&
                        copy[nr][nc] === 1
                    ) {
                        copy[nr][nc] = 2; // mutate the copy, not the original
                        fresh--;
                        queue.push([nr, nc]);
                    }
                }
            }
        }

        return fresh === 0 ? minutes : -1;
    }
}
