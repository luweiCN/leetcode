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
var preorderTraversal = function (root) {
    if (root === null) return [];
    let stack = [root];
    let res = [];
    while (stack.length) {
        let current = stack.pop();
        res.push(current.val);
        if (current.right !== null) {
            stack.push(current.right);
        }

        if (current.left !== null) {
            stack.push(current.left);
        }
    }

    return res;
};
// @lc code=end
