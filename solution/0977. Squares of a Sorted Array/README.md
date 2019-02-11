# 有序数组的平方

## 题目描述

给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

**示例1**

```
输入：[-4,-1,0,3,10]
输出：[0,1,9,16,100]
```

**示例2**

```
输入：[-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

**提示**

1. `1 <= A.length <= 10000`

2. `-10000 <= A[i] <= 10000`

3. `A` 已按非递减顺序排序。

## 解法

### 第一种解法

**思路**

创建一个新的数组，它每个元素是给定数组对应位置元素的平方，然后排序这个数组。

**算法**

```javascript
var sortedSquares = function(A) {
    let results = A.map((item, index, array) => {
        return item *= item;
    });
    results.sort((v1, v2) => {
        return v1 -v2;       
    });
    return results;
};
```

**复杂度分析**

- 时间复杂度：O(N \log N)*O*(*N*log*N*)，其中 N*N* 是数组 `A` 的长度。

- 空间复杂度：O(N)*O*(*N*)。 

### 第二种解法

**思路**

因为数组 `A` 已经排好序了， 所以可以说数组中的负数已经按照平方值降序排好了，数组中的非负数已经按照平方值升序排好了。

举一个例子，若给定数组为 `[-3, -2, -1, 4, 5, 6]`，数组中负数部分 `[-3, -2, -1]` 的平方为 `[9, 4, 1]`，数组中非负部分 `[4, 5, 6]` 的平方为 `[16, 25, 36]`。我们的策略就是从前向后遍历数组中的非负数部分，并且反向遍历数组中的负数部分。

**算法**

```javascript
var sortedSquares = function(A){
    let len = A.length;     // 数组长度
    let j = 0;              // j 正数开始
    while(j < len && A[j] < 0){
        j++;
    };
    let i = j - 1;          // i 负数开始
    let results = [];       // 存放最终结果
    let t = 0;              // results下标
    while(i >= 0 && j < len){
        if (A[i] * A[i] < A[j] * A[j]) {
            results[t++] = A[i] * A[i];
            i--;
        } else {
            results[t++] = A[j] * A[j];
            j++;
        }
    }
    while(i >= 0){
        results[t++] = A[i] * A[i];
        i--;
    }
    while(j < len){
        results[t++] = A[j] * A[j];
        j++;
    }
    return results;
}
```

**复杂度分析**

- 时间复杂度：O(N)*O*(*N*)，其中 *N*是数组 `A` 的长度。
- 空间复杂度：O(N)*O*(*N*)。