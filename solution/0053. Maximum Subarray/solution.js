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