/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
// var preorderTraversal = function (root) {
//     if (root === null) return [];

//     return [
//         root.val,
//         ...preorderTraversal(root.left),
//         ...preorderTraversal(root.right),
//     ];
// };

// 迭代
// var preorderTraversal = function (root) {
//     if (root === null) return [];
//     let stack = [root];
//     let res = [];
//     while (stack.length) {
//         let current = stack.pop();
//         res.push(current.val);
//         if (current.right !== null) {
//             stack.push(current.right);
//         }

//         if (current.left !== null) {
//             stack.push(current.left);
//         }
//     }

//     return res;
// };
var preorderTraversal = function (root) {
  if (root === null) return [];
  let stack = [root]; // 利用栈来遍历树
  let res = [];
  while (stack.length) {
    let current = stack.pop();
    if (current === null) continue;
    if (!current.visited) {
      // 节点未被访问
      current.visited = true; // 设置了一个变量，标记该节点是否被访问了
      stack.push(current.right, current.left, current); // 不管三七二十一，按照右根左的顺序全部入栈，即使有null的也会在上面continue的时候跳过
    } else {
      // 节点已经被访问了，输出值，遍历栈里的下一个节点
      res.push(current.val);
    }
  }
  return res;
};
// @lc code=end
