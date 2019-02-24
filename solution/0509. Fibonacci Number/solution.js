/**
 * @param {number} N
 * @return {number}
 */
let preResult = {};
var fib = function(N) {
  if( N === 0 ) return 0;
  if( N === 1 ) return 1;
  if( preResult[N] ){
    return preResult[N];
  } else {
    preResult[N] = fib(N-1) + fib(N-2);
  }
  return fib(N-1) + fib(N-2);
};