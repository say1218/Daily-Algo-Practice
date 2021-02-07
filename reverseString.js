//SOLUTION 1
function reverse1(word) {
	return word.split("").reverse().join("");
}
reverse1("fab");

//Solution 2
function reverse2(word) {
	let reverse = "";

	for (let character of word) {
		reverse = character + reverse;
	}

	return reverse;
}
console.log(reverse2("elevator"));
