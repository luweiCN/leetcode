/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const numberMap = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  let total = "";
  let carry = 0;

  for (
    let p = num1.length - 1, q = num2.length - 1;
    p >= 0 || q >= 0;
    p--, q--
  ) {
    let tmp =
      (p >= 0 ? numberMap[num1[p]] : 0) +
      (q >= 0 ? numberMap[num2[q]] : 0) +
      carry;
    carry = tmp >= 10 ? 1 : 0;
    total = (tmp % 10) + total;
  }
  if (carry) total = carry + total;
  return total;
};
// @lc code=end
