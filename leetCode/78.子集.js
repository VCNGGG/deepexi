/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let n = nums.length;
    let tmpPath = [];
    let res = [];
    let backtrack = (tmpPath,start) => {
        res.push(tmpPath);
       for(let i = start;i < n;i++){
           tmpPath.push(nums[i]);
           backtrack(tmpPath.slice(),i+1);
           tmpPath.pop();
       } 
    }
    backtrack(tmpPath,0);
    return res;
};

// @lc code=end

