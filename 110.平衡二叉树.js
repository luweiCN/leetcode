/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// var treeHeight = function (root) {
//   if (root === null) return 0;
//   return Math.max(treeHeight(root.left), treeHeight(root.right)) + 1;
// };

// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isBalanced = function (root) {
//   if (root === null) return true;
//   let leftHeight = treeHeight(root.left);
//   let rightHeight = treeHeight(root.right);
//   if (Math.abs(leftHeight - rightHeight) > 1) {
//     return false;
//   } else {
//     return isBalanced(root.left) && isBalanced(root.right);
//   }
// };

var recur = function (root) {
  if (root === null) return 0;
  let left = recur(root.left);
  if (left == -1) return -1;
  let right = recur(root.right);
  if (right == -1) return -1;
  return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
};

var isBalanced = function (root) {
  return recur(root) != -1;
};
// @lc code=end
