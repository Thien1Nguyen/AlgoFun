//https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

/*Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2


Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109


Follow-up: Could you solve the problem in linear time and in O(1) space? */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        }
        else{
            map[nums[i]] += 1;
        }
    }
    let majority = Object.keys(map).reduce(function(a, b){ return map[a] > map[b] ? a : b });

    return majority 
};

console.log(majorityElement([2,2,1,1,1,2,2]))