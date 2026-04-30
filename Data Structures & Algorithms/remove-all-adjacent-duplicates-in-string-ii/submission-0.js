class Solution {
    /**
     * Iterate over string, push each character to stack
     * If curChar === previousChar, counter +1
     * If not, counter = 1
     * if counter === k, pop stack k times. Also set hasKDup = true
     * At end of iteration, if hasKDup === true, clear stack & repeat above. Else, return stack joined
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    removeDuplicates(s, k) {
        let _s = s;
        let dupsExist = true;
        while (dupsExist === true) {
            const stack = [];
            let counter = 1;
            dupsExist = false;
            for (const ch of _s) {
                if (ch === stack[stack.length - 1]) {
                    counter++;
                }
                else {
                    counter = 1;
                }
                
                stack.push(ch);

                if (counter === k) {
                    let _k = k;
                    while (_k > 0) {
                        stack.pop();
                        _k--;
                    }
                    counter = 1;
                    dupsExist = true;
                }
            }
            _s = stack.join("");
        }
        

        return _s;
    }
}
