/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let min = -Math.pow(2,31),max = Math.pow(2,31) - 1;
  let rev = 0;
  while(x != 0){
    let pop = x % 10;
    x = (x - pop) / 10;
    if(rev > max / 10 || (rev == max / 10 && pop > 7)) return 0;
    if(rev < min / 10 || (rev == min / 10 && pop < -8)) return 0;
    rev = rev * 10 + pop;
  }
  return rev;
};