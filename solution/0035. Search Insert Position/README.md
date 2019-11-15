# 搜索插入位置

### 题目描述

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

**示例1**

```
输入: [1,3,5,6], 5
输出: 2
```

**示例2**

```
输入: [1,3,5,6], 2
输出: 1
```

**示例3**

```
输入: [1,3,5,6], 7
输出: 4
```

**示例4**

```
输入: [1,3,5,6], 0
输出: 0
```

### 解法

**思路**

思路是使用二分查找，先设定左侧下标 left 和右侧下标 right ，在计算中间下标 mid 。每次根据 nums[mid] 和 target 之间的大小进行判断，相等则直接返回下标，nums[mid] < target 则 left 右移，nums[mid] > target 则 right 左移，查找结束如果没有相等值则返回 left，该值为插入位置。

**算法**

```javascript
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
      left = mid  + 1;
    }
  }
  return left;
};
```

**复杂度分析**

- 时间复杂度：O(logn)
- 空间复杂度：O(1)