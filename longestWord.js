function findLongestWord(sentence) {
	let sentenceArray = sentence.split(" ");
	let maxLength = 0;
	let maxLengthWord = "";
	let longestword;
	for (word of sentenceArray) {
		if (word.length > maxLengthWord) {
			maxLengthWord = word;
		}
	}
	return maxLengthWord;

	// let longestWord = sentence
	// 	.split(" ")
	// 	.reduce(function (maxlengthWord, currentWord) {
	// 		if (currentWord.length > maxlengthWord.length) {
	// 			return currentWord;
	// 		} else {
	// 			return maxlengthWord;
	// 		}
	// 	}, "");

	return longestWord;
}

console.log(findLongestWord("I am the longest wordrrddddddddd"));
