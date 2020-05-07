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

// 迭代法
// var reverseList = function (head) {
//   let prev = null;
//   let current = head;
//   while (current) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//     // 可以简写成
//     // [current.next, current, prev] = [prev, current.next, current];
//   }
//   return prev;
// };

// 尾递归法
// var reverseList = function (head) {
//   if (head === null || head.next === null) return head;
//   let prev = null;
//   const reverse = function (first, second) {
//     let next = second.next;
//     second.next = first;
//     if (next === null) {
//       return second;
//     } else {
//       return reverse(second, next);
//     }
//   };
//   return reverse(prev, head);
// };

// 递归法
var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  let prev = null;
  let next = head.next;
  head.next = prev;
  prev = reverseList(next);
  return prev;
};
// @lc code=end
