/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 解法1
var removeElement = function (nums, val) {
  let len = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[len] = nums[i];
      len++;
    }
  }
  return len;
};

// 解法2
var removeElement2 = function (nums, val) {
  let i = 0
  let len = nums.length;
  while (i < len) {
    if (nums[i] === val) {
      nums[i] = nums[len - 1];
      len--;
    } else {
      i++;
    }
  }
  return i;
};