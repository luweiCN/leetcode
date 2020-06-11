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
  // 构建map保存每个元素的频率
  nums.forEach((v) => {
    map.set(v, map.get(v) ? map.get(v) + 1 : 1);
  });
  // 遍历map把元素插入到堆中
  map.forEach((value, key) => {
    insert(heap, { value, key }, k);
  });
  return heap.slice(1).map((v) => v.key);
};

function insert(heap, data, k) {
  if (heap.length - 1 >= k) {
    // 当堆中的元素数量超过k时，比较堆顶元素与新的元素，如果堆顶元素小于新的元素，用新的元素替换堆顶元素，重新堆化
    // 注意我们的堆是下标1开始的
    if (heap[1].value < data.value) {
      // 这相当于是从上往下堆化，从上往下堆化就是用堆顶元素和左右节点比较，找到最小的；
      // 如果最小的就是根节点，那么不需要调整；如果最小的元素是左右节点中的一个，调换根节点和最小的节点；然后遍历直到叶子节点
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

        // 调换根节点和最小的节点
        [heap[current], heap[minPos]] = [heap[minPos], heap[current]];
        // 如果最小的就是根节点
        if (minPos === current) break;

        // 继续遍历
        current = minPos;
      }
    }
  } else {
    // 堆中的元素数量小于k时，直接把元素放到堆的最后一个元素然后堆化
    // 这相当于从下至上的堆化，用插入的节点和它的父节点比较调换，直到字节点大于它的父节点
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

// var topKFrequent = function (nums, k) {
//   let map = new Map();
//   nums.forEach((v) => {
//     map.set(v, map.get(v) ? map.get(v) + 1 : 1);
//   });

//   return [...map]
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k)
//     .map((v) => v[0]);
// };

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));

// @lc code=end
