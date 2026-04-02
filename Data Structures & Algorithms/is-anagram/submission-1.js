class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const sMap = new Map();
        for (const letter of s) {
            sMap.set(letter, (sMap.get(letter) || 0) + 1);
        }

        for (const letter of t) {
            // checks undefined and 0
            if (sMap.get(letter)) {
                sMap.set(letter, sMap.get(letter) - 1);
            }
            else {
                return false;
            }
        }
        
        return true;
    }
}
