class HashMap {
    constructor(initialCapacity=8) {
        // set length to 0
        this.length = 0;
        // initialize empty hash array/table
        this._hashTable = [];
        // capacity is equal to initial capacity
        this._capacity = initialCapacity;
        // initialize deleted to 0
        this._deleted = 0;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error');
        }
        return this._hashTable[index].value;
    }

    set(key, value){
        // create a load ratio to increase by
        // loadRatio = (length + deleted +1)/capacity
        // this is because even if you have deleted items, they still take space in the map? and increase it by 1 to increase the ratio. 
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        // if the loadRatio is greater than the max ratio set, then the map needs to be resized. 
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }
        //Find the slot where this key should be in
        const index = this._findSlot(key);

        // if nothing is at this index on the hash table, increase length by 1. 
        if(!this._hashTable[index]){
            this.length++;
        }
        // then set this index to the new data.
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        }; 
    }

    delete(key) {
        // find the index of the key
        const index = this._findSlot(key);
        // set slot equal to the index (basically slot is the data)
        const slot = this._hashTable[index];
        // if it is empty, then return an error
        if (slot === undefined) {
            throw new Error('Key error');
        }
        // otherwise, this slot deleted key is set to true, and length is reduced and deletd is increased. 
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    _findSlot(key) {
        // find the hash value of the key
        const hash = HashMap._hashString(key);
        // set the start position by hash/capacity
        const start = hash % this._capacity;

        // because the key may not have been placed originally in the correct place due to collision, we must iterate from that position to find the key slot. It could be start or not. 
        for (let i=start; i<start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];

            // if the slot is undefined or the key exists at this position and is not deleted, 
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }

    _resize(size) {
        // create a new variable for hashtable to work with 
        const oldSlots = this._hashTable;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        // reset the values in the new table just like the old table. 
        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            //Bitwise left shift with 5 0s - this would be similar to
            //hash*31, 31 being the decent prime number
            //but bit shifting is a faster way to do this
            //tradeoff is understandability
            hash = (hash << 5) + hash + string.charCodeAt(i);
            //converting hash to a 32 bit integer
            hash = hash & hash;
        }
        //making sure hash is unsigned - meaning non-negtive number. 
        return hash >>> 0;
    }
}

MAX_LOAD_RATIO = 0.5;
SIZE_RATIO = 3;

module.exports = HashMap;