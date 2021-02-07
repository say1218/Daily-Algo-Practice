function reverseInt1(input) {
	let reversed = input.toString().split("").reverse().join("");
	return parseInt(reversed) * Math.sign(input);
}

console.log(reverseInt1(-398));
console.log(reverseInt1(706798));

function reverseInt2(input) {
	let reverse = 0;
	let ninput = input * Math.sign(input);
	while (ninput > 0) {
		reverse = parseInt(reverse * 10 + (ninput % 10));
		ninput = parseInt(ninput / 10);
	}
	return reverse * Math.sign(input);
}

//console.log(reverseInt2(674));
console.log(reverseInt2(-674));
