// For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
// "pig" = "igpay"
// For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
// "glove" = "oveglay"
// For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
// "explain" = "explainway”

function pigLatin(word) {
	let vowels = ["a", "e", "i", "o", "u"];
	if (vowels.includes(word[0].toLowerCase())) {
		return word + "way";
	} else {
		let vowelIndex = 0;
		for (let a = 1; a < word.length; a++) {
			if (vowels.includes(word[a].toLowerCase())) {
				vowelIndex = a;
				break;
			}
		}

		let convertedWord =
			word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
		return convertedWord;
	}
}

console.log(pigLatin("glove"));
