/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

function isCanChange(word1, word2) {
    let count = 0
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            count++;
        }
        if (count == 2) {
            return false;
        }
    }
    if (count === 1) return true;
    return false;
}

var ladderLength = function (beginWord, endWord, wordList) {


    let q = [];
    q.push([beginWord, 1]);
    let visited = {};
    visited[beginWord] = true;
    while (q.length > 0) {
        // console.log("qq", q);
        let data = q.shift();
        let word = data[0];
        let step = data[1];
        for (let i = 0; i < wordList.length; i++) {
            // console.log("word", word,wordList[i],i,wordList.length)
            if (isCanChange(word, wordList[i])) {
                let a = wordList[i]
                // console.log("aa", a);
                if (a === endWord) return step + 1;
                if (!visited[a]) {
                    q.push([a, step + 1])
                    visited[a] = true
                }
            }

        }
    }
    return 0
};

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]))

console.log(isCanChange( "log","log"))

// @lc code=end

