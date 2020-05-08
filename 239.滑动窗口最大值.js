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

// 暴力解法
// var maxSlidingWindow = function (nums, k) {
//   if (nums.length <= 0) return [];
//   if (k == 1) return nums;
//   let current = [];
//   let max_arr = [];
//   let i = 0;
//   let j = 0;
//   while (j <= nums.length) {
//     if (j > k - 1) {
//       max_arr.push(Math.max(...current));
//       current.push(nums[j]);
//       current.shift(nums[i]);
//       i++;
//       j++;
//     } else {
//       current.push(nums[j]);
//       j++;
//     }
//   }

//   return max_arr;
// };

// 双端队列
var maxSlidingWindow = function (nums, k) {
  let deque = [];
  let max_arr = [];
  for (let i = 0; i < nums.length; i++) {
    while (nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
    if (i - deque[0] >= k) {
      deque.shift();
    }
    if (i >= k - 1) {
      max_arr.push(nums[deque[0]]);
    }
  }
  return max_arr;
};

// @lc code=end
