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
     * @return {boolean}
     */
    hasCycle(head) {
        let turtle = head;
        let rabbit = head;

        while (true) {
            turtle = turtle?.next;
            rabbit = rabbit?.next?.next;
            if (!rabbit || !turtle) {
                return false;
            }
            if (turtle === rabbit) {
                return true;
            }
        }
    }
}
