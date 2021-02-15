//falsyBouncer([1, 0, null, '', 5]) // should return [1,5]

function falsyBouncer(arr) {
	let newArray = arr.filter((item, index) => {
		return Boolean(item);
		// item !== null &&
		// item !== undefined &&
		// item !== 0 &&
		// item !== "" &&
		// item !== false
	});
	return newArray;
}

console.log(falsyBouncer([1, 0, null, "", 5]));

//for loops are faster than functions
