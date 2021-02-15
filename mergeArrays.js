function mergeArrays(x, y) {
	let result = [];
	console.log("X ARRAY IS", x);
	console.log("\nY ARRAY IS", y);

	let longerArray = x.length > y.length ? x : y;
	let shorterArray = x.length > y.length ? y : x;
	let mergedArray = [...x, ...y];

	let filteredArray = mergedArray.filter(
		(elem, index, arr) => arr.findIndex((x) => x.id === elem.id) === index
	);
	filteredArray.sort(function (a, b) {
		return a.id - b.id;
	});
	return filteredArray;
}

mergeArrays([{ id: 2 }, { id: 4 }], [{ id: 3 }, { id: 2 }, { id: 4 }]);
