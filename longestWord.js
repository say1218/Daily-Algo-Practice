function findLongestWord(sentence) {
	let sentenceArray = sentence.split(" ");
	let maxLength = 0;
	let longestword;
	// for (word of sentenceArray) {
	// 	if (word.length > maxLength) {
	// 		maxLength = word.length;
	// 		longestword = word;
	// 	}
	// }
	// return longestword;

	let longestWord = sentence
		.split(" ")
		.reduce(function (maxlengthWord, currentWord) {
			if (currentWord.length > maxlengthWord.length) {
				return currentWord;
			} else {
				return maxlengthWord;
			}
		}, "");

	return longestWord;
}

console.log(findLongestWord("I am the longest wordrrddddddddd"));
