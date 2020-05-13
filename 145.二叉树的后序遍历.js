/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
// var postorderTraversal = function (root) {
//   if (root === null) return [];
//   return [
//     ...postorderTraversal(root.left),
//     ...postorderTraversal(root.right),
//     root.val,
//   ];
// };

var postorderTraversal = function (root) {
  if (root === null) return [];
  let stack = [root];
  let res = [];
  while (stack.length) {
    let current = stack.pop();
    if (current === null) continue;
    if (!current.visited) {
      current.visited = true;
      stack.push(current, current.right, current.left);
    } else {
      res.push(current.val);
    }
  }

  return res;
};
// @lc code=end
