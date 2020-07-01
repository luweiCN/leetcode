/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// // 排序发
// var findKthLargest = function (nums, k) {
//   nums.sort((a, b) => b - a);
//   return nums[k - 1];
// };

// 构建大顶堆，然后依次移除堆顶元素，移除的第k个元素就是要找的数

var findKthLargest = function (nums, k) {
  const heap = buildHeap(nums);
  for (let i = 0; i < k; i++) {
    if (i === k - 1) return removeTop(heap);
    removeTop(heap);
  }
};

var buildHeap = function (nums) {
  if (nums.length <= 1) return nums;
  for (let i = 0; i < nums.length; i++) {
    let current = i;
    let parent = parseInt((current - 1) / 2);
    while (parent >= 0 && nums[parent] < nums[current]) {
      [nums[parent], nums[current]] = [nums[current], nums[parent]];
      [current, parent] = [parent, parseInt((parent - 1) / 2)];
    }
  }
  return nums;
};

var removeTop = function (nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return nums.pop();
  const top = nums[0];
  nums[0] = nums.pop();
  let maxPos = 0;
  let current = 0;
  let left = 2 * current + 1;
  let right = 2 * current + 2;
  while (true) {
    if (left < nums.length - 1 && nums[maxPos] < nums[left]) {
      maxPos = left;
    }

    if (right < nums.length - 1 && nums[maxPos] < nums[right]) {
      maxPos = right;
    }
    if (maxPos === current) break;
    [nums[maxPos], nums[current]] = [nums[current], nums[maxPos]];

    current = maxPos;
    left = 2 * current + 1;
    right = 2 * current + 2;
  }
  return top;
};

// @lc code=end
