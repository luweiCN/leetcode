/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  let res = [];
  function helper(root, index) {
    if (root !== null) {
      if (res[index]) {
        res[index].push(root.val);
      } else {
        res[index] = [root.val];
      }
      helper(root.left, index + 1);
      helper(root.right, index + 1);
    }
  }
  helper(root, 0);
  return res;
};
// @lc code=end
