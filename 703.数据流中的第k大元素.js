/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
// var KthLargest = function (k, nums) {
//   this.nums = nums;
//   this.k = k;
// };

// /**
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function (val) {
//   this.nums.push(val);
//   this.nums.sort((a, b) => b - a);
//   return this.nums[this.k - 1];
// };

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// 使用小顶堆
var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = [,];
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }
};

KthLargest.prototype.add = function (val) {
  if (this.heap.length - 1 < this.k) {
    this.heap.push(val);
    let current = this.heap.length - 1;
    let parent = parseInt(current / 2);
    while (this.heap[parent] > this.heap[current]) {
      [this.heap[parent], this.heap[current]] = [
        this.heap[current],
        this.heap[parent],
      ];
      [current, parent] = [parent, parseInt(parent / 2)];
    }
    return this.heap[1];
  } else {
    if (val > this.heap[1]) {
      this.heap[1] = val;
      let minPos = 1;
      let parent = 1;
      let leftChild = parent * 2;
      let rightChild = parent * 2 + 1;
      while (true) {
        if (this.heap[parent] > this.heap[leftChild]) minPos = leftChild;
        if (this.heap[minPos] > this.heap[rightChild]) minPos = rightChild;
        if (minPos === parent) break;
        [this.heap[parent], this.heap[minPos]] = [
          this.heap[minPos],
          this.heap[parent],
        ];
        parent = minPos;
        leftChild = parent * 2;
        rightChild = parent * 2 + 1;
      }
    }
    return this.heap[1];
  }
};

// @lc code=end
