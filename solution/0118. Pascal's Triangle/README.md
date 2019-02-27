# 杨辉三角

### 题目描述

给定一个非负整数 *numRows，*生成杨辉三角的前 *numRows* 行。

![在杨辉三角中，每个数是它左上方和右上方的数的和。](https://github.com/Mcnwork2018/LeetCode_mcn/blob/master/image/PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

**示例**

```
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

### 解题思路

**思路**

如果能够知道一行杨辉三角，我们就可以根据每对相邻的值轻松地计算出它的下一行。

**算法**

虽然这一算法非常简单，但用于构造杨辉三角的迭代方法可以归类为动态规划，因为我们需要基于前一行来构造每一行。

首先，我们会生成整个 `triangle` 列表，三角形的每一行都以子列表的形式存储。然后，我们会检查行数为 `0 `的特殊情况，否则我们会返回 `[1]`。如果 `numRows` > 0，那么我们用 `[1]` 作为第一行来初始化 `triangle` with `[1]`，并按如下方式继续填充：

```javascript
var generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1],[1,1]];
  let triangleArray = [[1],[1,1]];
  for ( let i = 2; i < numRows; ++i ) {
    triangleArray[i] = [];
    for ( let j = 0; j < i + 1; ++j ) {
      if ( j === 0 || j === i ) {
        triangleArray[i][j] = 1;
      } else {
        triangleArray[i][j] = triangleArray[i-1][j-1] + triangleArray[i-1][j];
      }
    }
  }
  return triangleArray;
};
```

**复杂度分析**

- 时间复杂度：O(numRows^2)

  虽然更新 `triangle` 中的每个值都是在常量时间内发生的， 但它会被执行 O(numRows^2) 次。想要了解原因，就需要考虑总共有多少 次循环迭代。很明显外层循环需要运行 numRows 次，但在外层循环的每次迭代中，内层 循环要运行 rowNum 次。因此，`triangle` 发生的更新总数为 1+2+3+…+numRows，根据高斯公式 有

  ![高斯公式](https://github.com/Mcnwork2018/LeetCode_mcn/blob/master/image/118formula.png)

- 空间复杂度：O(numRows^2)

  因为我们需要存储我们在 `triangle` 中更新的每个数字， 所以空间需求与时间复杂度相同。