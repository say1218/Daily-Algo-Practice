var kidsWithCandies = function (candies, extraCandies) {
	let maxCandies = candies.map(function (item, index) {
		let canReceive = item + extraCandies;
		if (canReceive == Math.max(...candies) || canReceive > Math.max(...candies))
			return true;
		else return false;
	});

	return maxCandies;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
