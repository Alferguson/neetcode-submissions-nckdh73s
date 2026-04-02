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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummyNode = new ListNode();
        let tail = dummyNode

        while (list1 != null && list2 != null) {
            const list1LessThan = list1.val <= list2.val;
            tail.next = list1LessThan ? list1 : list2; 

            if (list1LessThan) {
                list1 = list1.next;
            }
            else {
                list2 = list2.next;
            }

            tail = tail.next;
        }

        if (list1 == null) {
            tail.next = list2;
        }
        if (list2 == null) {
            tail.next = list1;
        }


        return dummyNode.next;
    }
}
