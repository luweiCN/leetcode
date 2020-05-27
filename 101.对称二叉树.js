/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */

// //  递归解法
// var isSymmetric = function (root) {
//   if (root === null) return true;

//   function symmetric(left, right) {
//     if (left === null && right === null) {
//       return true;
//     } else if (left !== null && right !== null) {
//       return (
//         left.val === right.val &&
//         symmetric(left.left, right.right) &&
//         symmetric(left.right, right.left)
//       );
//     } else {
//       return false;
//     }
//   }
//   return symmetric(root.left, root.right);
// };

// 迭代解法
var isSymmetric = function (root) {
  let queue = [root, root];
  while (queue.length) {
    let t1 = queue.shift();
    let t2 = queue.shift();
    if (t1 == null && t2 == null) continue;
    if (t1 == null || t2 == null) return false;
    if (t1.val != t2.val) return false;
    queue.push(t1.left);
    queue.push(t2.right);
    queue.push(t1.right);
    queue.push(t2.left);
  }
  return true;
};
// @lc code=end
