/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 解法二：借鉴冒泡排序的思想
  // 1. 从前往后遍历
  // 2. 把非0的数往前移动，直到它前面的数不是0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      for (let j = i; j >= 1; j--) {
        var temp = nums[j - 1];
        if (temp !== 0) break;
        nums[j - 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
};
// @lc code=end
