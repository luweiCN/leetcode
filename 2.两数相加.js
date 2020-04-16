/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let list = new ListNode()
    currentNode = list
    let left = l1
    let right = l2
    let needAdd = false
    while (left.val || left.next || right.val || right.next) {
        currentNode.val = left.val || 0 + right.val + 0 + needAdd ? 1 : 0
        needAdd = false
        if (currentNode.val > 10) {
            currentNode.val -= 10
            needAdd = true
        }
        currentNode.next = new ListNode()
        currentNode = currentNode.next
        left = left.next
        right = right.next
    }
    return list
};
// @lc code=end

