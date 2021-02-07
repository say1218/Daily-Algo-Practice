//fastest
function capitalise(sentence) {
	let caparray = sentence.split(" ").map(function (word, index) {
		return word[0].toUpperCase() + word.slice(1, word.length);
	});

	return caparray.join(" ");
}

console.log(capitalise("the ides of march"));
