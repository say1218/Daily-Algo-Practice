// forEach
function isSubset(arr1, arr2) {
	var subset = true;

	arr1.forEach(function (item) {
		if (!arr2.includes(item)) {
			subset = false;
		}
	});

	return subset;
}

// reduce
function isSubset(arr1, arr2) {
	return arr1.reduce(function (bool, nextItem) {
		if (bool === false) {
			return false;
		}

		return arr2.includes(nextItem);
	}, true);
}
