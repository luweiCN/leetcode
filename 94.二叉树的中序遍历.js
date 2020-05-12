/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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

//  递归法
// var inorderTraversal = function (root) {
//   if (root === null) return [];
//   return [
//     ...inorderTraversal(root.left),
//     root.val,
//     ...inorderTraversal(root.right),
//   ];
// };

// 迭代法
var inorderTraversal = function (root) {
  if (root === null) return [];
  let stack = [root];
  let res = [];
  while (stack.length) {
    let current = stack.pop();
    if (current === null) continue;
    if (!current.visited) {
      current.visited = true;
      stack.push(current.right, current, current.left);
    } else {
      res.push(current.val);
    }
  }
  return res;
};
// @lc code=end
