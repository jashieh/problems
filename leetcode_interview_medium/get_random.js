/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.hash = {};
    this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(val in this.hash) {
        return false;
    }
    
    this.arr.push(val);
    this.hash[val] = this.arr.length - 1;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(val in this.hash) {
        let idx = this.hash[val];
        let last = this.arr[this.arr.length - 1];
        
        
        this.hash[last] = idx;
        this.arr[idx] = last;
        this.arr.pop();
        delete this.hash[val];
        return true;
    }
    return false;
    
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let idx = Math.floor(Math.random()*(this.arr.length));
    return this.arr[idx];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */