/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    if(!digits) return [];
    let len = digits.length;
    let map = new Map();
    map.set('2','abc');
    map.set('3','def');
    map.set('4','ghi');
    map.set('5','jkl');
    map.set('6','mno');
    map.set('7','pqrs');
    map.set('8','tuv');
    map.set('9','wxyz');
    let ans = [];
    function combinations(i,str) {
        if(i === len) {
            ans.push(str);
            return;
        } 
        let temp = map.get(digits[i]);
        for(let k = 0; k < temp.length; k++) {
            combinations(i+1,str+temp[k])
        }
    }
    combinations(0,'')
    return ans;
};

// @lc code=end

