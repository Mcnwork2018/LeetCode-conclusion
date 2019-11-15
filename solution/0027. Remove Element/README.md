# 移除元素

### 题目描述

给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

**示例1**

```
给定 nums = [3,2,2,3], val = 3,者：LeetCode
链接：https://leetcode-cn.com/problems/remove-element/solution/yi-chu-yuan-su-by-leetcode/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

你不需要考虑数组中超出新长度后面的元素。
```

**示例2**

```
给定 nums = [0,1,2,2,3,0,4,2], val = 2,

函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

注意这五个元素可为任意顺序。

你不需要考虑数组中超出新长度后面的元素。
```

**说明**

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```
// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

**提示**

1. Try two pointers.

2. Did you use the property of "the order of elements can be changed"?

3. What happens when the elements to remove are rare?

### 解法

**解法一：双指针**

**思路**

双指针法，其中 i 是慢指针，是 j 快指针，当 nums[j] 与给定的值相等时，递增 j 以跳过该元素。只要 nums[j] != val，我们就复制 nums[j] 到 nums[i] 并同时递增两个索引。重复这一过程，直到 j 到达数组的末尾，该数组的新长度为 i。

**算法**

```javascript
var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};
```

**复杂度分析**

- 时间复杂度：O(n)，假设数组总共有n个元素，i和j至少遍历2n步。
- 空间复杂度：O(1)。

**解法二：双指针 —— 当要删除的元素很少时**

**思路**

现在考虑数组包含很少的要删除的元素的情况。例如，num=[1，2，3，5，4]，Val=4。之前的算法会对前四个元素做不必要的复制操作。另一个例子是 num=[4，1，2，3，5]，Val=4。似乎没有必要将 [1，2，3，5][1，2，3，5] 这几个元素左移一步，*因为问题描述中提到元素的顺序可以更改*。

当我们遇到 nums[i] = val 时，我们可以将当前元素与最后一个元素进行交换，并释放最后一个元素。这实际上使数组的大小减少了 1。请注意，被交换的最后一个元素可能是您想要移除的值。但是不要担心，在下一次迭代中，我们仍然会检查这个元素。

**算法**

```javascript
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
```

**复杂度分析**

- 时间复杂度：O(n)，i 和 n 最多遍历 n 步。在这个方法中，赋值操作的次数等于要删除的元素的数量。因此，如果要移除的元素很少，效率会更高。

- 空间复杂度：O(1)。