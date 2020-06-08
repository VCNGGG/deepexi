/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    // console.log(root);
    // console.log(root.val)
    let res = []
    if (root == null) {
        return res;
    }
    // console.log(root.val)
    let queue = [[root, 0]];
    // console.log(root.val)
    while (queue.length) {
        let queue_member = queue.shift();
        // console.log("queue_member",queue_member)
        let node = queue_member[0];
        let level = queue_member[1]

        if (level === res.length) {
            res.push([node.val])
        } else {
            res[level].push(node.val)
        }

        if (node.left !== null) {
            queue.push([node.left, level + 1])
        }

        if (node.right !== null) {
            queue.push([node.right, level + 1])
        }

    }
    return res.reverse();
};
// @lc code=end

