//SOLUTION 1
function reverse1(word) {
	return word.split("").reverse().join("");
}
console.log(reverse1("elevator"));

//Solution 2
function reverse2(word) {
	let reverse = "";

	for (let character of word) {
		reverse = character + reverse;
	}

	return reverse;
}
console.log(reverse2("elevator"));

//Solution 3
function reverse3(word) {
	return word.split("").reduce((acc, characters) => characters + acc, "");
}
console.log(reverse3("elevator"));
