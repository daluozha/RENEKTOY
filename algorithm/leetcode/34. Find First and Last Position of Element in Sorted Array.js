/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //法一
    return [nums.indexOf(target),nums.lastIndexOf(target)]
};