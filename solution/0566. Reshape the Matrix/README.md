# 重塑矩阵

### 题目描述

在MATLAB中，有一个非常有用的函数 `reshape`，它可以将一个矩阵重塑为另一个大小不同的新矩阵，但保留其原始数据。

给出一个由二维数组表示的矩阵，以及两个正整数`r`和`c`，分别表示想要的重构的矩阵的行数和列数。

重构后的矩阵需要将原始矩阵的所有元素以相同的**行遍历顺序**填充。

如果具有给定参数的`reshape`操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

**示例1**

```
输入: 
nums = 
[[1,2],
 [3,4]]
r = 1, c = 4
输出: 
[[1,2,3,4]]
解释:
行遍历nums的结果是 [1,2,3,4]。新的矩阵是 1 * 4 矩阵, 用之前的元素值一行一行填充新矩阵。
```

**示例2**

```
输入: 
nums = 
[[1,2],
 [3,4]]
r = 2, c = 4
输出: 
[[1,2],
 [3,4]]
解释:
没有办法将 2 * 2 矩阵转化为 2 * 4 矩阵。 所以输出原矩阵。
```

**注意**

1. 给定矩阵的宽和高范围在 [1, 100]。
2. 给定的 r 和 c 都是正数。

**提示**

- Do you know how 2d matrix is stored in 1d memory? Try to map 2-dimensions into one.

  你知道 2d 矩阵是如何存储在 1d 内存中的吗? 尝试将 2 维映射为一维.

- M [i] [j] = M [ n * i + j ] , where n is the number of cols. This is the one way of converting 2-d indices into one 1-d index. Now, how will you convert 1-d index into 2-d indices?

  M [i] [j] = M [ n * i + j ], 其中 n 是 cols 的数量。 这是将 2-d 指数转换为 1-d 指数的一种方法. 现在,您如何将 1-d 指数转换为 2-d 指数?

- Try to use division and modulus to convert 1-d index into 2-d indices.

  尝试使用除法和模数将 1-d 指数转换为 2-d 指数。

- M [i] => M [ n / i ] [ n % i ] Will it result in right mapping? Take some example and check this formulae.

  M [i] => M [ n / i ] [ n ％ i ] 会导致正确的映射吗? 举一些例子，检查这个公式。

### 解题思路

**方法一：暴力遍历法**

**思路**

先检查二维数组是否非法，若非法，直接返回。若不非法，则将二维数组遍历转换成一维数组，再通过给出的`r`行数和`c`列数生成目标矩阵。

**算法**

```javascript
var matrixReshape = function(nums, r, c) {
  let row = nums.length, col = nums[0].length;
  if ( row * col != r * c ) {
    return nums;
  }
  let oneDimArray = [];
  for ( let i = 0; i < row; ++i ) {
    for ( let j = 0; j < col; ++j ) {
      oneDimArray[ col * i + j ] = nums[i][j];
    }
  }
  let MulArray = [];
  for ( let k = 0; k < r; ++k ) {
    MulArray[k] = [];
    for ( let l = 0; l < c; ++l  ) {
      MulArray[k][l] = oneDimArray[ c * k + l ];
    }
  }
  return MulArray;
}
```

**方法二：矩阵之间的对应关系**

**思路**

首先还是要检查二维数组是否非法，当给出的二维数组用`i`指向行、`j`指向列，一维数组和二维数组有`M [ col * i + j ] = nums [ i ] [ j ]`的对应关系（col是二维数组的列数），而目标矩阵和一维数组也可以反用该对应关系映射。二维数组 => 一维数组 => 目标矩阵，那目标矩阵和二维数组是否可以不通过一维数组去直接映射，答案是可以的，两者的数量是相等的，索引位置`index`可以使用一维数组的对应关系表示 `col * i + j`，对应关系为`MulArray [ ( col * i + j ) / c ] [ ( col * i + j ) % c ] = nums [i] [j]`（注意在强类型语言中`( col * i + j ) / c`会强制取整，而像JavaScript需要使用parseInt()或~~位操作符去取整）,数量可以用给出的`r`和`c`计算，对于nums也可以使用`index`除列数得当前行，`index`取模列数得当前列，就有下列算法表示，先生成空的目标多维数组，在用对应关系映射得到矩阵。

**算法**

```javascript
var matrixReshape = function(nums, r, c) {
  let row = nums.length, col = nums[0].length;
  if ( row * col != r * c ) {
    return nums;
  }
  let mulArray = [];
  for ( let q = 0; q < r; ++q ) {
    mulArray[q] = [];
  }
  for ( let i = 0; i < r * c; ++i ) {
    mulArray[~~( i / c )][ i % c ] = nums[~~( i / col )][ i % col ];
  }
  return mulArray;
}
```

