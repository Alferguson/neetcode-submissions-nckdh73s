/**
 * Logic: Create recursive binary search (BS) function to get valid indexes
 * - Func takes left and right and calcs middle
 * -- middle = rounded down(left + right) / 2
 * - if arr[left] + arr[right] === target, return true
 * - if arr[left] > target OR right - left <= 1, return false 
 * -- (can't do equals for 0 potential)
 * - if arr[left] + arr[right] > target, call BS(left, middle)
 * - if arr[left] + arr[right] < target, call BS(middle, right)
 * 
 * call recursive func with left = 0 and right = arr.length - 1
 */
class Solution {
  twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum === target) return [left + 1, right + 1];
      if (sum > target) right--;
      else left++;
    }
    return []; // or throw / handle per problem spec
  }
}
