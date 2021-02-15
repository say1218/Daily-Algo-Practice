// solution 1
function findVowels(sentence) {
	let ref = ["a", "e", "i", "o", "u"];
	let count = 0;
	sentence.split("").forEach((elem) => {
		if (ref.includes(elem)) {
			count++;
		}
	});
	return count;
}

//console.log(findVowels("Hi There"));

//solution2
function findVowels2(sentence) {
	let result = sentence.match(/[aeiou]/gi);
	console.log(result);
}
console.log(findVowels("Hi There"));
