/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length <= 0) return [];
  if (k == 1) return nums;
  let current = [];
  let max_arr = [];
  let i = 0;
  let j = 0;
  while (j <= nums.length) {
    if (j > k - 1) {
      max_arr.push(Math.max(...current));
      current.push(nums[j]);
      current.shift(nums[i]);
      i++;
      j++;
    } else {
      current.push(nums[j]);
      j++;
    }
  }

  return max_arr;
};

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// @lc code=end
