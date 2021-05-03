// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// var isHappy = function (n) {
// 	console.log(n);

// 	while (n > 9 || n != 100) {
// 		n1 = Math.trunc(n / 10);
// 		n2 = Math.trunc(n % 10);
// 		console.log(n1 + "---" + n2);
// 		n = Math.pow(n1, 2) + Math.pow(n2, 2);
// 		console.log(n);
// 	}
// 	if (n != 1) return false;
// 	else return true;
// };

// console.log(isHappy(19));

// var twoSum = function (nums, target) {
// 	let possibleArray = [];

// 	for (var i = 0; i < nums.length; i++) {
// 		if (nums[i] > target) continue;
// 		let complement = target - nums[i];
// 		console.log(complement);
// 		if (nums.includes(complement) && nums.indexOf(complement) !== i) {
// 			console.log("yess");
// 			possibleArray.push(i);
// 			possibleArray.push(nums.indexOf(complement));
// 			break;
// 		}
// 	}

// 	return possibleArray;
// };

// const twoSum = function (nums, target) {
// 	const comp = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		if (comp[nums[i]] >= 0) {
// 			return [comp[nums[i]], i];
// 		}
// 		comp[target - nums[i]] = i;
// 		console.log(comp);
// 	}
// };

// console.log(twoSum([3, 2, 4], 6));

