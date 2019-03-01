/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

// 第一种办法
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

// 第二种办法
var matrixReshape2 = function(nums, r, c) {
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