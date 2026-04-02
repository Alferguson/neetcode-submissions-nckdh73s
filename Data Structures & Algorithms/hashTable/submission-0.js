class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.hashTable = new Map();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        this.hashTable.set(key, value);
        if (this.hashTable.size >= Math.floor(this.capacity / 2)) {
            this.resize();
        }
    }
    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        return this.hashTable.get(key) ?? -1;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        return this.hashTable.delete(key);
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.hashTable.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }

    /**
     * @return {void}
     */
    resize() {
        this.capacity *= 2;
    }
}
