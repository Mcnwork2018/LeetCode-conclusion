/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (target  >  nums[nums.length - 1]) {
    return nums.length;
  }
  if (target < nums[0]) {
    return 0;
  }
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = parseInt((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};