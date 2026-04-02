/**
 * Iterate over array
 * - If el is num, push to stack unless res isn't set. Set res to first stack
 * - Elseif el is operator, calc "result" of operation of stack nums. Pop nums from stack as this is done
 * - do operation on running result. If result isn't set
 */

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        tokens.forEach( el => {
            if (el === "+" || el === "-" || el === "*" || el === "/" ) {
                this.#evalOperators(el, stack);
            }
            else {
                stack.push(Number(el));
            }
        });

        return stack[0];
    }

    #evalOperators(operator, stack) {
        const rightOperand = stack.pop();
        const leftOperand = stack.pop();
        let result = null;

        if (rightOperand == null || leftOperand == null) {
            console.error("wtf");
        }

        if (operator === "+") {
            result = leftOperand + rightOperand;
        }
        else if (operator === "-") {
            result = leftOperand - rightOperand;
        }
        else if (operator === "*") {
            result = leftOperand * rightOperand;
        }
        else if (operator === "/") {
            result = Math.trunc(leftOperand / rightOperand);
        }

        stack.push(result);
    }
}
