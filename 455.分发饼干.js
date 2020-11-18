/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  s.sort((a, b) => a - b);
  g.sort((a, b) => a - b);

  let s_index = -1;
  let count = 0;

  for (let i = 0; i < g.length; i++) {
    while (true) {
      ++s_index;
      if (s[s_index] >= g[i]) {
        count++;
        break;
      }
      if (s_index >= s.length) {
        break;
      }
    }
  }
  return count;
};
// @lc code=end
