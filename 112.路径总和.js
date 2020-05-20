/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
// var hasPathSum = function (root, sum) {
//   if (root === null) return false;
//   if (root.left === null && root.right === null && root.val === sum)
//     return true;
//   return (
//     hasPathSum(root.left, sum - root.val) ||
//     hasPathSum(root.right, sum - root.val)
//   );
// };

var hasPathSum = function (root, sum) {
  if (root === null) return false;
  let stack = [[root, sum - root.val]];
  while (stack.length) {
    let current = stack.pop();
    let currentNode = current[0];
    if (
      currentNode.left === null &&
      currentNode.right === null &&
      current[1] === 0
    )
      return true;

    if (currentNode.left !== null) {
      stack.push([currentNode.left, current[1] - currentNode.left.val]);
    }

    if (currentNode.right !== null) {
      stack.push([currentNode.right, current[1] - currentNode.right.val]);
    }
  }
  return false;
};
// @lc code=end
