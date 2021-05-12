/**
 * @param {number[]} nums
 * @return {boolean}
 */

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].  An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Return true if and only if the given array nums is monotonic.

var isMonotonic = function(nums) {
    var increasing = nums[0] < nums[nums.length - 1];
    
    for(var i = 1; i < nums.length; i++) {
        if (increasing && (nums[i - 1] > nums[i])) {
            return false;
        }
        
        if (!increasing && (nums[i - 1] < nums[i])) {
            return false;
        }
    }
    
    return true;
};