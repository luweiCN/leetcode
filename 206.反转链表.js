/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let arr = [];
    let current = head;
    while (current && current.val !== null) {
        arr.push(current);
        current = current.next;
    }

    let reverse = new ListNode(null);
    let reverse_head = reverse;
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse = arr[i];
        i - 1 >= 0 && (reverse.next = arr[i - 1]);
        if (i === arr.length - 1) {
            reverse_head = reverse;
        }
    }
    reverse.next = null;
    return reverse_head && reverse_head.val !== null ? reverse_head : null;
};
// @lc code=end
