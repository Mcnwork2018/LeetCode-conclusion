/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 第一种解法
var twoSum = function(nums,target) {
  var len = nums.length;
  for(var i = 0;i < len;i++){
    for(var j = i + 1; j < len;j++){
      if(nums[j] == target - nums[i]){
        return [i,j];
      }
    }
  }
};
// 第二种解法
var twoSum = function(nums, target) {
  var len = nums.length;
  var n = {};
  for(var j = 0; j < len; j++){
      n[nums[j]] = j;
  }
  for(var i = 0; i < len; i++){
      if(n[target - nums[i]] !== undefined && n[target - nums[i]] != i){
          return [i,n[target - nums[i]]];
      }
  }
};
// 第三种解法
var twoSum = function(nums, target) {
  var len = nums.length;
  var n = {};
  for(var i = 0; i < len; i++){
      if(n[target - nums[i]] !== undefined){
          return [n[target - nums[i]], i];
      }
      n[nums[i]] = i;
  }
};