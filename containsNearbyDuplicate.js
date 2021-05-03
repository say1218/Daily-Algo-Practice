var containsNearbyDuplicate = function (nums, k) {
	let charMap = [];

	if (nums.length <= 1) {
		return false;
	} else {
		for (let n = 0; n < nums.length; n++) {
			if (nums[n] in charMap) {
				charMap[nums[n]] = {
					frequency: charMap[nums[n]].frequency + 1,
					distance: n - charMap[nums[n]],
				};
			} else {
				charMap[nums[n]] = {
					frequency: 1,
					distance: n,
				};
			}
		}

		console.log(charMap);

		if (charMap.every((elem) => elem.frequency === 1)) {
			return false;
		}

		let distance = charMap.some((elem) => elem.distance <= k);
		return distance;
	}
};

//console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
//console.log(containsNearbyDuplicate([1], 1));
console.log(containsNearbyDuplicate([1, 2], 2));
