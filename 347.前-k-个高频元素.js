/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  let heap = [,];
  nums.forEach((v) => {
    map.set(v, map.get(v) ? map.get(v) + 1 : 1);
  });
  map.forEach((value, key) => {
    insert(heap, { value, key }, k);
  });
  return heap.slice(1).map((v) => v.key);
};

function insert(heap, data, k) {
  if (heap.length - 1 >= k) {
    if (heap[1].value < data.value) {
      heap[1] = data;
      let minPos = 1;
      let current = 1;
      while (true) {
        const left = 2 * minPos;
        const right = 2 * minPos + 1;
        if (left <= k && heap[minPos].value > heap[left].value) {
          minPos = left;
        }
        if (right <= k && heap[minPos].value > heap[right].value) {
          minPos = right;
        }

        [heap[current], heap[minPos]] = [heap[minPos], heap[current]];
        if (minPos === current) break;
        current = minPos;
      }
    }
  } else {
    heap.push(data);
    let current = heap.length - 1;
    let parent = parseInt(current / 2);
    while (parent > 0 && heap[parent].value > heap[current].value) {
      [heap[parent], heap[current]] = [heap[current], heap[parent]];
      current = parent;
      parent = parseInt(current / 2);
    }
  }
}

// @lc code=end
