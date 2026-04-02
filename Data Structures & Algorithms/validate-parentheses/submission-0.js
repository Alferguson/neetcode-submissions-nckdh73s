class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        let _isValid = true;

        for (const char of s) {
            // check left bracket char
            if (char === "(" || char === "[" || char === "{") {
                stack.push(char);
            }
            // check right closing bracket char
            else {
                const lastCharInStack = stack.pop();

                if (!this._isMatchingClosing(lastCharInStack, char)) {
                    _isValid = false;
                    break;
                }
            }
        }

        if (stack.length > 0) {
            _isValid = false;
        }

        return _isValid;
    }

    _isMatchingClosing(leftChar, rightChar) {
        switch (leftChar) {
            case "(": 
                return rightChar === ")";
            case "[": 
                return rightChar === "]";
            case "{": 
                return rightChar === "}";
            default: 
                return false;
        }
    }
}
