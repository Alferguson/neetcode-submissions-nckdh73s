/**
 * Iterate over prices
 * Set left pointer to 0
 * Right = left + 1
 * If prices[left] >= prices[right]
 * - continue
 * elseif prices[left] < prices[right]
 * - set profit if cur profit > profit
 * - while prices[right] > prices[left]
 * -- profit = cur profit > profit
 * set left to right after while loop completes
 */

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;

        for (let i = 0; i < prices.length; i++) {
            let j = i + 1;
            if (prices[i] >= prices[j]) {
                continue;
            }
            while (prices[i] < prices[j]) {
                profit = (prices[j] - prices[i] > profit) 
                    ? (prices[j] - prices[i]) 
                    : profit;
                j++;
            }
            i = j - 1;
        }

        return profit;
    }
}
