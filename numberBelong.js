console.log(whereIBelong([1, 2, 3, 4], 3.5)); // should return 1 because it is greater than 1(index 0), but less than 2(index 1).

function whereIBelong(arr, num) {
	let pos = 0;
	for (let a = 0; a < arr.length; a++) {
		if (num < arr[a]) {
			pos = a;
			break;
		}
	}
	return pos;
}

//solution 2-  slower
function whereIBelong(arr, num) {
	arr.push(num);
	arr.sort((a, b) => a - b);
	return arr.indexOf(num);
}
