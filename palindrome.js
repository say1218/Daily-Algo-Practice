//solution 1
function palindrome(word) {
	let rword = word.split("").reverse().join("");
	return rword === word;
}

console.log(palindrome("mom"));
console.log(palindrome("mother"));
console.log(palindrome("wonderland"));
console.log(palindrome("deified"));

//solution2
function palindrome2(word) {
	for (var i = 0; i <= word.length / 2; i++) {
		if (word[i] !== word[word.length - i - 1]) return false;
	}
	return true;
}

console.log(palindrome2("mom"));
console.log(palindrome2("mother"));
console.log(palindrome2("wonderland"));
console.log(palindrome2("deified"));
