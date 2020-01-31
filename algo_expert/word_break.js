// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
// determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

var wordBreak = function(s, wordDict) {
    let tab = new Array(s.length +1).fill(false);
    
    tab[0] = true;
    
    for(let i = 0; i < tab.length; i++) {
        if(tab[i] === false) continue;
        
        for(let j = i+1; j < tab.length; j++) {
            if(wordDict.includes(s.slice(i,j))) {
                tab[j] = true;
            }
        }
    }
    
    return tab[s.length];
};