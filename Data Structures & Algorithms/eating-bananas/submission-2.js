/**
 * Logic: grab max value from piles and set a min value by taking h / piles.length (round down)
 * - From this range, we know at the very least, we can eat bananas at the max rate
 * - Do a binary search where between the range set, check if middle of range works.
 * - If middle doesn't work, value must exist between middle and max
 * -- check middle of prev middle and max
 * - If value does work, check value - 1
 * -- If value - 1 does NOT work, return value (answer)
 * -- if value - 1 does work, continue Binary Search between min and value - 1 since answer MUST exist in that range
 * - edge: if middle is equal to min, return max
 * 
 * Runtime: O(n * log(n))
 * - where n = length of piles
 * - must iterate over piles at least once to grab max
 * - then do Binary Search on it ( log n )
 * Space: O(n)
 * - storing min and max constant variables
 * - storing copy of piles just for ease of use
 */
class Solution {
    minEatingSpeed(piles, h) {
        let min = 1; // must be at least 1
        let max = Math.max(...piles);

        return this.#checkMiddleBananaRate(min, max, piles, h);
    }

    #checkMiddleBananaRate(min, max, piles, h) {
        if (min === max) return min;

        const middle = Math.floor((min + max) / 2);

        if (
            this.#canEatBananasInXTime(middle, piles, h) &&
            !this.#canEatBananasInXTime(middle - 1, piles, h)
        ) {
            return middle;
        }
        else if (this.#canEatBananasInXTime(middle, piles, h)) {
            return this.#checkMiddleBananaRate(min, middle, piles, h);
        }
        else {
            return this.#checkMiddleBananaRate(middle + 1, max, piles, h);
        }
    }

    #canEatBananasInXTime(bananasPerHour, piles, h) {
        let hours = 0;

        for (const pile of piles) {
            hours += Math.ceil(pile / bananasPerHour);
            if (hours > h) return false;
        }

        return true;
    }
}
