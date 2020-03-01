/**
 * Initialize your data structure here.
 */
class Node {
    constructor() {
        this.children = {};
        this.terminal = false;
    }  
    
    get(char) {
        return this.children[char];
    }
}

var Trie = function() {
    this.root = new Node();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    
    for(let i = 0; i < word.length; i++) {
        let char = word[i];
        if(!(char in node.children)) {
            let newNode = new Node();
            node.children[char] = newNode;
        }
        node = node.get(char);
        if(i === word.length - 1) node.terminal = true;
    }
    
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for(let i = 0; i < word.length; i++) {
        let char = word[i];
        if(!(char in node.children)) return false;
        node = node.get(char);
    }
    return node.terminal;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for(let i = 0; i < prefix.length; i++) {
        let char = prefix[i];
        if(!(char in node.children)) return false;
        node = node.get(char);
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */