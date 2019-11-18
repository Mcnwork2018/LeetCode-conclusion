# 最大子序和
### 题目描述
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
**示例**
```
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```
**进阶**
如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

### 解法

**方法一：暴力穷举法**

**思路**

利用双重循环穷举出来所有连续子数组和的组合，把最大的和返回。

**算法**

```javascript
var maxSubArray = function(nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let temp = 0;
    for (let j = i; j < nums.length; j++) {
      temp+=nums[j];
	  max = Math.max(max, temp);
    }
  }
  return max;
};
```

**复杂度分析**

- 时间复杂度：O(n^2)
- 空间复杂度：O(1)

**方法二：动态规划**

**思路**

使用动态规划的思想，具体实现是 Kadane算法。Kadane算法扫描一次整个数列的所有数值，在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。该子数列由两部分组成：以前一个位置为结束点的最大子数列、该位置的数值。因为该算法用到了“最佳子结构”（以每个位置为终点的最大子数列都是基于其前一位置的最大子数列计算得出, 该算法可看成动态规划的一个例子。状态转移方程：
$$
sum[i] = max(sum[i-1]+a[i],a[i])
$$
 其中sum[i]记录以a[i]为子序列末端的最大序子列连续和。

**算法**

```javascript
var maxSubArray2 = function(nums) {
  let ans = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    ans = Math.max(ans, sum);
  }
  return ans;
};
```

**复杂度分析**

- 时间复杂度：O(n)
- 空间复杂度：O(1)

**方法三：分治法**

（暂时没想明白）