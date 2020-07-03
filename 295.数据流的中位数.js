/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.max_heap = [,];
  this.min_heap = [,];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (num > this.max_heap[1] || this.max_heap[1] === undefined) {
    this.addMin(num);
  } else {
    this.addMax(num);
  }
  this.reHeap();
};

MedianFinder.prototype.reHeap = function () {
  while (this.min_heap.length - this.max_heap.length > 1) {
    this.addMax(this.removeMin());
  }
  while (this.max_heap.length - this.min_heap.length > 1) {
    this.addMin(this.removeMax());
  }
};

MedianFinder.prototype.removeMax = function () {
  const removeNum = this.max_heap[1];
  this.max_heap[1] = this.max_heap.pop();
  let maxPos = 1;
  let current = 1;
  let left = 2 * current;
  let right = 2 * current + 1;
  while (true) {
    if (
      left < this.max_heap.length &&
      this.max_heap[maxPos] < this.max_heap[left]
    )
      maxPos = left;
    if (
      right < this.max_heap.length &&
      this.max_heap[maxPos] < this.max_heap[right]
    )
      maxPos = right;
    if (maxPos === current) break;
    [this.max_heap[maxPos], this.max_heap[current]] = [
      this.max_heap[current],
      this.max_heap[maxPos],
    ];
    current = maxPos;
    left = 2 * current;
    right = 2 * current + 1;
  }

  return removeNum;
};

MedianFinder.prototype.removeMin = function () {
  const removeNum = this.min_heap[1];
  this.min_heap[1] = this.min_heap.pop();
  let minPos = 1;
  let current = 1;
  let left = 2 * current;
  let right = 2 * current + 1;
  while (true) {
    if (
      left < this.min_heap.length &&
      this.min_heap[minPos] > this.min_heap[left]
    )
      minPos = left;
    if (
      right < this.min_heap.length &&
      this.min_heap[minPos] > this.min_heap[right]
    )
      minPos = right;
    if (minPos === current) break;
    [this.min_heap[minPos], this.min_heap[current]] = [
      this.min_heap[current],
      this.min_heap[minPos],
    ];
    current = minPos;
    left = 2 * current;
    right = 2 * current + 1;
  }

  return removeNum;
};

MedianFinder.prototype.addMax = function (num) {
  this.max_heap.push(num);
  let current = this.max_heap.length - 1;
  let parent = parseInt(current / 2);
  while (parent >= 1 && this.max_heap[parent] < this.max_heap[current]) {
    [this.max_heap[current], this.max_heap[parent]] = [
      this.max_heap[parent],
      this.max_heap[current],
    ];
    [current, parent] = [parent, parseInt(parent / 2)];
  }
};

MedianFinder.prototype.addMin = function (num) {
  this.min_heap.push(num);
  let current = this.min_heap.length - 1;
  let parent = parseInt(current / 2);
  while (parent > 0 && this.min_heap[parent] > this.min_heap[current]) {
    [this.min_heap[current], this.min_heap[parent]] = [
      this.min_heap[parent],
      this.min_heap[current],
    ];
    [current, parent] = [parent, parseInt(parent / 2)];
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.min_heap.length !== this.max_heap.length) {
    return this.min_heap.length > this.max_heap.length
      ? this.min_heap[1]
      : this.max_heap[1];
  } else {
    return (this.min_heap[1] + this.max_heap[1]) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
