class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0;
        let left = 0;
        const freq = new Map();
        let maxFreq = 0;
        
        for (let right = 0; right < s.length; right++) {
            // Update frequency of current character
            freq.set(s[right], (freq.get(s[right]) || 0) + 1);
            
            // Update max frequency in current window
            maxFreq = Math.max(maxFreq, freq.get(s[right]));
            
            // Current window length
            const windowLength = right - left + 1;
            
            // If we need more than k replacements, shrink window
            if (windowLength - maxFreq > k) {
                freq.set(s[left], freq.get(s[left]) - 1);
                left++;
            }
            
            // Update max length
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}
