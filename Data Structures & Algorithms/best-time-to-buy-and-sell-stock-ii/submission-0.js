class Solution {
    /**
     * Iterate over prices
     * If prices[i + 1] <= prices[i] continue
     * Else 
     * * calc diff
     * * set another pointer j
     * * set curMax = prices[j]
     * * j++ until curMax > price[j]
     * * while -> set diff to new diff
     * * after set i to j and res += diff
     * return res
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;

        for (let i = 0; i < prices.length - 1; i++) {
            if (prices[i + 1] > prices[i]) {
                let diff = prices[i + 1] - prices[i];
                let j = i + 2;
                let curMax = prices[i + 1];
                while (prices[j] > prices[i] && prices[j] > curMax) {
                    const newDiff = prices[j] - prices[i];
                    diff = diff > newDiff ? diff : newDiff;
                    curMax = prices[j];
                    j++;
                }
                i = j - 1;
                res += diff;
            }
        }

        return res;
    }
}
