//https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

let arr = [0,1,2,2,3,0,4,2]
let val = 2
var removeElement = function(nums, val) {
    var zeroStartIdx = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[zeroStartIdx]=nums[i];
            zeroStartIdx++
        }
    }
    return zeroStartIdx;
};

console.log(removeElement(arr,val));
console.log(arr)
