class MyNode<T> {
    value: T | null;
    prev: MyNode<T> | null = null;
    next: MyNode<T> | null = null;

    constructor(value: T | null) {
        this.value = value;
    }
}

class BrowserHistory<T> {
    private cur: MyNode<T>

    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage: T) {
        this.cur = new MyNode(homepage);
    }

    visit(url: T): void {
        const node = new MyNode(url);
        node.prev = this.cur;
        this.cur.next = node;
        this.cur = node;
    }

    back(steps: number): T {
        while (steps > 0 && this.cur.prev !== null) {
            this.cur = this.cur.prev;
            steps--;
        }
        return this.cur.value;
    }

    forward(steps: number): T {
        while (steps > 0 && this.cur.next !== null) {
            this.cur = this.cur.next;
            steps--;
        }
        return this.cur.value;
    }
}
