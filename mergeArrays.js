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

//merge 2 arrays

//this is good for less than 100 items
for (var i = 0; i < array2.length; i++)
	if (array1.indexOf(array2[i]) === -1) array1.push(array2[i]);

//thsi is good for more items
var a = [...new Set([...array1, ...array2])];
