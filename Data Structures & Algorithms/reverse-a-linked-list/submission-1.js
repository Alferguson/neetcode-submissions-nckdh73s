/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let _newHead = null;

        let prev = null;
        let next;

        while (head) {
            next = head.next; // 1, 2
            head.next = prev; // null, 0
            
            if (next == null) {
                _newHead = head;
                break;
            }

            prev = head; // 0, 1
            head = next; // 1, 2
        }

        return _newHead;
    }
}
