/**
 * @param {number[]} A
 * @return {number[]}
 */
// 第一次的做法
var sortArrayByParity = function (A) {
  const len = A.length;
  if (len === 1) return A;
  let evenNumber = [], oddNumber = [];
  for (let i = 0; i < len; i++) {
    if (A[i] % 2 === 0) {
      evenNumber.push(A[i]);
    } else {
      oddNumber.push(A[i]);
    }
  }
  return evenNumber.concat(oddNumber);
};
// 修改第一次的代码,只使用一个数组，减少一次合并数组操作
var sortArrayByParity = function (A) {
  const len = A.length;
  if (len === 1) return A;
  let eoNum = [];
  A.forEach((item, index, array) => {
    if (item % 2 === 1) {
      eoNum.push(item);
    } else {
      eoNum.unshift(item);
    }
  });
  return eoNum;
};
// 双指针做法,无需新数组，push和unshift操作，利用第三个变量进行交换
var sortArrayByParity = function (A) {
  const len = A.length;
  if (len === 1) return A;
  let i = 0, j = len - 1;
  while (i < j) {
    if ((A[i] % 2 === 1) && (A[j] % 2 === 0)) {
      let temp = A[j];
      A[j--] = A[i];
      A[i++] = temp;
    }
    if (A[i] % 2 === 0) i++;
    if (A[j] % 2 === 1) j--;
  }
  return A;
};
// 先找奇偶现象在做交换，和双指针的效率差不对
var sortArrayByParity = function (A) {
  const len = A.length;
  if (len === 1) return A;
  let i = 0, j = len - 1;
  while (i < j) {
    while ( A[i] % 2 === 0 ) i++;
    while ( A[j] % 2 === 1 ) j--;
    while( i < j && (A[i] % 2 === 1) && (A[j] % 2 === 0) ){
      let temp = A[j];
      A[j--] = A[i];
      A[i++] = temp;
    }
  }
  return A;
};