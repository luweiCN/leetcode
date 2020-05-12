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
  let stack = [root]; // 利用栈来遍历树
  let res = [];
  while (stack.length) {
    let current = stack.pop();
    if (current === null) continue;
    if (!current.visited) {
      // 节点未被访问
      current.visited = true; // 设置了一个变量，标记该节点是否被访问了
      stack.push(current.right, current, current.left); // 不管三七二十一，按照右根左的顺序全部入栈，即使有null的也会在上面continue的时候跳过
    } else {
      // 节点已经被访问了，输出值，遍历栈里的下一个节点
      res.push(current.val);
    }
  }
  return res;
};
// @lc code=end
