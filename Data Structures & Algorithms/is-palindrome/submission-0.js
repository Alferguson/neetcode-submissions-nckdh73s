class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const strArr = s.split("").filter(char => /[a-z0-9]/i.test(char)).map(c => c.toLowerCase());
        console.log(strArr)
        let i = 0;
        let j = strArr.length - 1;

        while (i <= j) {
            if (strArr[i] !== strArr[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
