/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root === null) return [];
  let queue = [[root]];
  let print = [];
  while (queue.length) {
    let currentLevel = queue.shift(); // 当前遍历的层，也是一个队列保存的是当前层所有的节点
    let currentLevelVal = [];
    let nextLevel = []; // 准备保存下一层所有的节点
    while (currentLevel.length) {
      let currentNode = currentLevel.shift();
      currentLevelVal.push(currentNode.val);

      // 根据当前层节点是否有子节点构造下一层的队列
      if (currentNode.left !== null) {
        nextLevel.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        nextLevel.push(currentNode.right);
      }
    }

    // 如果下一层队列还有节点，加到外层队列
    if (nextLevel.length) {
      queue.push(nextLevel);
    }
    if (currentLevel.length === 0) {
      print.unshift(currentLevelVal);
    }
  }

  return print;
};
// @lc code=end
