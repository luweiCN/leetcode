/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function (preorder, inorder) {
    if (preorder.length) {
        let head = new TreeNode(preorder.shift());
        let index = inorder.indexOf(head.val);
        head.left = buildTree(
            preorder.slice(0, index),
            inorder.slice(0, index)
        );
        head.right = buildTree(preorder.slice(index), inorder.slice(index + 1));
        return head;
    } else {
        return null;
    }
};
// @lc code=end
