/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // Handle empty array

    let k = 1; // k starts at 1 because the first number is always unique

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // Put the unique number at position k
            k++; // Move the index of unique numbers forward
        }
    }

    return k; 
};

//Input: nums = [1,1,2]
//Output: 2, nums = [1,2,_]
