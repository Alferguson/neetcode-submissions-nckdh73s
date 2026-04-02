class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const directions = (r, c) => [
            [r - 1, c],
            [r + 1, c],
            [r, c - 1],
            [r, c + 1],
        ];

        const queue = [];
        let fresh = 0;

        // Collect all rotten oranges first (multi-source BFS)
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) queue.push([r, c]);
                if (grid[r][c] === 1) fresh++;
            }
        }

        if (fresh === 0) return 0;

        let minutes = -1;

        while (queue.length > 0) {
            const size = queue.length;
            minutes++;

            for (let i = 0; i < size; i++) {
                const [r, c] = queue.shift();

                for (const [nr, nc] of directions(r, c)) {
                    if (
                        nr >= 0 && nr < rows &&
                        nc >= 0 && nc < cols &&
                        grid[nr][nc] === 1
                    ) {
                        grid[nr][nc] = 2; // rot it
                        fresh--;
                        queue.push([nr, nc]);
                    }
                }
            }
        }

        return fresh === 0 ? minutes : -1;
    }
}
