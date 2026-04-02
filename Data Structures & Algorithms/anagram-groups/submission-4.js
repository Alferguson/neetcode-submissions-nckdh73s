/**
 * Logic: 
 * - reduce strs to array of objects where keys are characters and values are freq
 * - iterate over array, 
 * -- Each index, check if object exists elsewhere in current array
 * -- If true, push to temp array 
 * -- End of each index, push temp array to Solution
 * -- have visitedIndex array so index doesn't get repeated
 * 
 * Run complex: O(n)
 */

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = [];
        const characterFreq = strs.reduce( (acc, cur) => {
            const charFreqForGivenIndex = cur.split("").reduce( (accChar, curChar) => {
                console.log(accChar, curChar);
                if (accChar.hasOwnProperty(curChar)) {
                    accChar[curChar] = accChar[curChar] + 1;
                }
                else {
                    accChar[curChar] = 1;
                }

                return accChar;
            }, {});
            acc.push(charFreqForGivenIndex);
            return acc;
        }, []);

        if (characterFreq.length === 0) {
            return [strs];
        }

        const wordIndexAlreadyExtracted = [];
        let i = 0;

        console.log(characterFreq);

        while (i < strs.length) {
            if (wordIndexAlreadyExtracted.includes(i)) {
                i++;
                continue;
            }
            const tempArr = [strs[i]];

            for (let j = i + 1; j < strs.length; j++) {
                if (wordIndexAlreadyExtracted.includes(j)) {
                    continue;
                }
                else if (this.#objectsEqual(characterFreq[i], characterFreq[j])) {
                    tempArr.push(strs[j]);
                    wordIndexAlreadyExtracted.push(j);
                }
            }

            res.push(tempArr);
            i++;
        }

        return res;
    }

    #objectsEqual(a, b) {
        const aKeys = Object.keys(a); 
        if (aKeys.length !== Object.keys(b).length) return false; 
        for (const key of aKeys) { 
            if (!Object.hasOwn(b, key) || a[key] !== b[key]) return false; 
        } 
        return true;
    }
}
