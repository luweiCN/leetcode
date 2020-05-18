/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  function isInTree(root, node) {
    if (root === null) return false;
    if (root === node) return true;
    return isInTree(root.left, node) || isInTree(root.right, node);
  }
  let current = root;
  while (true) {
    if (current === p || current === q) return current;
    if (isInTree(current.left, p)) {
      if (isInTree(current.right, q)) {
        return current;
      } else {
        current = current.left;
      }
    } else {
      if (isInTree(current.left, q)) {
        return current;
      } else {
        current = current.right;
      }
    }
  }
};
// @lc code=end
