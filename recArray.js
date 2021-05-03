//Count all Occurrences of a Number
function count(myArray, key) {
	if (myArray.length === 0) {
		return 0;
	}

	if (myArray[0] === key) {
		return 1 + count(myArray.slice(1), key);
	} else {
		return 0 + count(myArray.slice(1), key);
	}
}

//reverse an array

function reverseArray(array) {
	if (array.length === 0) {
		return [];
	} else if (array.length === 1) {
		return array;
	} else {
		return [array[array[length - 1]]].concat(
			reverseArray(array.slice(0, length - 1))
		);
	}
}

//replace negative numbers with zero
function replaceNegativeNumbers(array, index) {
	if (index < array.length) {
		if (array[index] < 0) {
			array[index] = 0;
		}
		replaceNegativeNumbers(array, index + 1);
	}
	return;
}

//
