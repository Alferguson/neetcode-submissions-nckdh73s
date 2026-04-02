class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numFreqs = new Map();

        for (const num of nums) {
            numFreqs.set(num, (numFreqs.get(num) || 0) + 1 );
        }
        const freqNums = new Map();
        console.log(numFreqs);

        numFreqs.forEach( (frequency, number) => {
            console.log(number, frequency);

            const current = freqNums.get(frequency);

            if (Array.isArray(current)) {
               current.push(number); 
            }
            else {
                freqNums.set(frequency, [number]);
            }
        });

        console.log(freqNums);

        let frequency = nums.length;
        let kCopy = k;
        let answer = [];

        while (frequency > 0 && kCopy > 0) {
            const current = freqNums.get(frequency);

            if (!current) {
                frequency--;
            }
            else {
                kCopy = kCopy - current.length;
                answer = answer.concat(current);
                frequency--;
            }
        }

        return answer;
    }
}
