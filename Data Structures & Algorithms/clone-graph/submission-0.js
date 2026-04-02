/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

/**
 * do either bfs or dfs to find an element with 0 neighbors. 
 * At each iteration, append current "copy" node to previous "copy" node's neighbors
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) {
            return node;
        }

        console.log(node);
        const oldToNew = new Map();

        const _dfs = (node) => {
            if (node == null) {
                return null;
            }

            if (oldToNew.has(node)) {
                return oldToNew.get(node);
            }
            const curNode = new Node(node.val); 
            oldToNew.set(node, curNode);

            node.neighbors.forEach( (nNode) => { 
                curNode.neighbors.push(_dfs(nNode));
            });

            return curNode;
        }

        return _dfs(node);
    }
}
