function reverseInt(input) {
	let reversed = input.toString().split("").reverse().join();
	return parseInt(reversed) * Math.sign(input);
}
