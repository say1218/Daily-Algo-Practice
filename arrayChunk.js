//solution1 - 2 for loops
function arrayChunk1(array, size) {
	if (array.length < size) {
		return array;
	}

	let newArray = [];
	for (var i = 0; i < array.length; i += size) {
		let temparray = [];
		for (var j = i; j < i + size; j++) {
			if (array[j]) {
				temparray.push(array[j]);
			}
		}
		newArray.push(temparray);
	}

	return newArray;
}

//slice
function arrayChunk2(array, size) {
	let newArray = [];
	for (var i = 0; i < array.length; i += size) {
		let tempArray = array.slice(i, i + size);
		newArray.push(tempArray);
	}
	return newArray;
}
//console.log(arrayChunk2([1, 2, 3, 4, 5, 6, 7], 9));

//splice
function arrayChunk3(array, size) {
	let newArray = [];
	let arrayCopy = [...array];
	while (arrayCopy.length != 0) {
		newArray.push(arrayCopy.splice(0, size));
	}

	return newArray;
}
//console.log(arrayChunk3([1, 2, 3, 4, 5, 6, 7], 3));

//--- need to improve this
function arrayChunk4(array, size) {
	let newArray = [];
	let tempArray = [];

	for (var i = 0; i <= array.length; i++) {
		if (tempArray.length === size || i === array.length) {
			newArray.push(tempArray);
			tempArray = [];
			tempArray.push(array[i]);
		} else {
			tempArray.push(array[i]);
		}
	}

	return newArray;
}
console.log(arrayChunk4([1, 2, 3, 4, 5, 6, 7], 3));
