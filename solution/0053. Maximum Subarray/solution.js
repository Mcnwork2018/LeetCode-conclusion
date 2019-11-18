// 第一种解法： 暴力穷举出所有的可能性
var maxSubArray = function(nums) {
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    let temp = 0;
    for (let j = i; j < nums.length; j++) {
      temp+=nums[j];
      max = Math.max(max, temp);
    }
  }
  return max;
};
// 第二种解法：动态规划
var maxSubArray2 = function(nums) {
  let ans = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    ans = Math.max(ans, sum);
  }
  return ans;
};
// 第三种解法：分治法
var maxSubArray3 = function(nums) {
  return divide(nums, 0,  nums.length - 1);
};

function divide (nums, left, right) {
  if (left === right) {
    return nums[left];
  }
  let center = parseInt((left + right) / 2);
  let leftMaxSum = divide(nums, left, center);
  let rightMaxSum = divide(nums, center + 1, right);
  let leftBorderSum = nums[center];
  let leftSum = nums[center];
  for (let i = center - 1; i >= 0; i--) {
    leftSum += nums[i];
    leftBorderSum = Math.max(leftSum, leftBorderSum);
  }
  let rightBorderSum = nums[center + 1];
  let rightSum = nums[center + 1];
  for (let i = center + 2; i <= right; i++) {
    rightSum += nums[i];
    rightBorderSum = Math.max(rightSum, rightBorderSum);
  }
  return Math.max(leftMaxSum, rightMaxSum,  leftBorderSum + rightBorderSum);
}