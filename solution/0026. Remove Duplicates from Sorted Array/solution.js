/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
  if (nums === null || nums.length === 0) { 
    return 0; 
  }
  let len = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[len++] = nums[i];
    } 
  }
  return len;
};