function searchReplace(sentence, oldWord, newWord) {
	if (oldWord[0] === newWord[0].toUpperCase()) {
		newWord = newWord[0].toUpperCase() + newWord.slice(1);
	}

	return sentence.replace(oldWord, newWord);
}

console.log(
	searchReplace("He is Sleeping on the couch", "Sleeping", "sitting")
);
