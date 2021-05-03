// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

var singleNumber = function (nums) {
	let charMap = {};

	for (n of nums) {
		if (n in charMap) {
			charMap[n]++;
		} else {
			charMap[n] = 1;
		}
	}

	console.log(charMap);
	console.log(Object.values(charMap));
};

console.log(singleNumber([4, 1, 2, 1, 2]));
